import { List, Trash, X } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteHabit, getHabits } from '../../services/habits';
import { ModalLoading } from '../ModalLoading';
import { RequestError } from '../RequestError';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

interface Habit {
  id: string;
  title: string;
  created_at: string;
  weekDays: {
    id: string;
    habit_id: string;
    week_day: number;
  }[];
}

export function ListOfHabitsModal() {
  const queryClient = useQueryClient();

  const [allHabits, setAllHabits] = useState<Habit[]>([]);
  const { isLoading, error, data: habits } = useQuery({ queryKey: ['habits'], queryFn: getHabits });

  const mutation = useMutation({
    mutationFn: deleteHabit,
    onSuccess: () => {
      toast.success('Hábito deletado com sucesso');
      queryClient.invalidateQueries({ queryKey: ['habits'] });
    },
  });

  const handleDeleteHabit = (id: string) => {
    mutation.mutate(id);
  };

  useEffect(() => {
    if (habits && habits.length) setAllHabits(habits.sort((a: Habit, b: Habit) => (a.title > b.title ? 1 : -1)));
  }, [habits]);

  return (
    <Dialog.Root>
      <Dialog.Trigger
        type="button"
        className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-600 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-background"
      >
        <List size={20} className="text-violet-500" />
        Lista de Hábitos
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-8" />
        <Dialog.Content className="absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Dialog.Close className="absolute right-6 top-6 text-zinc-400 rounded-md hover:text-zinc-200 transition-all duration-400 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-zinc-900">
            <X size={24} aria-label="Botão Fechar Modal" />
          </Dialog.Close>
          <Dialog.Title className="text-3xl leading-tight font-extrabold">Lista de Hábitos</Dialog.Title>
          {isLoading ? <ModalLoading /> : null}
          {error ? <RequestError /> : null}
          {habits && habits.length ? (
            <Dialog.Description className="text-xl mt-4 overflow-x-auto max-h-screen">
              <ul className="mt-4">
                {allHabits.map((habit) => (
                  <li key={habit.id} className="flex items-center justify-between mb-3">
                    <span className="text-white">{habit.title}</span>
                    <button
                      className="group mr-2 p-1 rounded-lg hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-zinc-900 transition-all duration-300"
                      onClick={() => handleDeleteHabit(habit.id)}
                    >
                      <Trash
                        size={20}
                        aria-label="Lixeira para deletar um hábito"
                        className="text-red-500 group-hover:text-white transition-all duration-300"
                      />
                    </button>
                  </li>
                ))}
              </ul>
            </Dialog.Description>
          ) : (
            <div className="mt-5">
              <span className="text-zinc-500">Nenhum hábito cadastrado</span>
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
