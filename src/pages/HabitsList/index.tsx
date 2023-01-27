import React, { useEffect, useState } from 'react';
import { PageContainer } from '../../components/PageContainer';
import { useTable } from 'react-table';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteHabit, getHabits } from '../../services/habits';
import { toast } from 'react-toastify';
import { RequestError } from '../../components/RequestError';
import { Loading } from '../../components/Loading';
import { Trash } from 'phosphor-react';

const fakeData = [
  {
    id: 1,
    habit: 'adsadsdas',
    actions: 'asdasdasd',
  },
];

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

export function HabitsListPage() {
  const queryClient = useQueryClient();

  const [allHabits, setAllHabits] = useState<Habit[]>([]);
  const { isLoading, error, data: habits } = useQuery({ queryKey: ['habits'], queryFn: getHabits });

  const header = React.useMemo(() => ['Hábito', 'Dias da Semana', 'Ações'], []);

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

  if (isLoading)
    return (
      <PageContainer>
        <div className="h-[88%] flex items-center justify-center">
          <Loading />
        </div>
      </PageContainer>
    );
  if (error)
    return (
      <PageContainer>
        <div className="h-[88%] flex items-center justify-center">
          <RequestError />
        </div>
      </PageContainer>
    );

  return (
    <PageContainer>
      <div className={'w-full max-w-5xl h-[88%] px-6 flex flex-col gap-16 flex-1 items-center justify-center mx-auto'}>
        <table className="w-full w-max-5xl">
          <thead className="w-full">
            <tr className="flex w-full">
              {header.map((column) => {
                return <th className="flex-1">{column}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              {allHabits.map((habit) => {
                return (
                  <tr className="flex w-full">
                    <td className="flex-1 text-center">{habit.title}</td>
                    <td className="flex-1 text-center">
                      {habit.weekDays.map((weekDay) => {
                        return <span>{weekDay.week_day}</span>;
                      })}
                    </td>
                    <td className="flex-1 text-center">
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
                    </td>
                  </tr>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </PageContainer>
  );
}
