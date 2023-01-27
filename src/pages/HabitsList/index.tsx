import React, { useEffect, useState } from 'react';
import { PageContainer } from '../../components/PageContainer';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteHabit, getHabits } from '../../services/habits';
import { toast } from 'react-toastify';
import { RequestError } from '../../components/RequestError';
import { Loading } from '../../components/Loading';
import { Pencil, Trash } from 'phosphor-react';
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

  const formatWeekDays = (weekDays: number[]) => {
    const weekDaysFormatted = weekDays.map((weekDay) => {
      switch (weekDay) {
        case 0:
          return 'Domingo';
        case 1:
          return 'Segunda';
        case 2:
          return 'Terça';
        case 3:
          return 'Quarta';
        case 4:
          return 'Quinta';
        case 5:
          return 'Sexta';
        case 6:
          return 'Sábado';
        default:
          return '';
      }
    });
    return weekDaysFormatted.join(', ');
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
      <div className={'w-full max-w-5xl h-[88%] px-6 flex flex-col gap-16 flex-1 items-center justify-start mx-auto'}>
        <table className="w-full w-max-5xl rounded-lg overflow-hidden mt-14">
          <thead className="w-full bg-violet-600 rounded-lg">
            <tr className="flex w-full py-4 px-6">
              {header.map((column, index) => {
                return (
                  <th key={`${column}-${index}`} className={index === 2 ? 'flex-0' : 'flex-1'}>
                    <span className="font-normal">{column}</span>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {allHabits.map((habit, index) => {
              return (
                <tr key={`${habit}-${index}`} className="flex w-full py-4 px-6 bg-zinc-900">
                  <td className="flex-1 flex items-center justify-start">{habit.title}</td>
                  <td className="flex-1 flex items-center justify-center">
                    {formatWeekDays(habit.weekDays.map((weekDay) => weekDay.week_day))}
                  </td>
                  <td className="flex-0 flex items-center justify-center">
                    <button className="group p-1 rounded-lg hover:bg-violet-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-zinc-900 transition-all duration-300">
                      <Pencil
                        size={20}
                        aria-label="Lápis para editar um hábito"
                        className="text-violet-600 group-hover:text-white transition-all duration-300"
                      />
                    </button>
                    <button
                      className="group p-1 rounded-lg hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-zinc-900 transition-all duration-300"
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
          </tbody>
          <tfoot className="w-full bg-violet-600 rounded-lg">
            <tr className="flex w-full py-4 px-6">
              {header.map((index) => {
                return <th key={`${index}`} className={'flex-1'} />;
              })}
            </tr>
          </tfoot>
        </table>
      </div>
    </PageContainer>
  );
}
