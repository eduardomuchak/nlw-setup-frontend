import * as Checkbox from '@radix-ui/react-checkbox';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Check } from 'phosphor-react';
import { getInfoByDay } from '../../services/day';
import { Loading } from '../Loading';
import dayjs from 'dayjs';
import { updateToggleHabit } from '../../services/habits';
import { useEffect, useState } from 'react';

interface Props {
  date: Date;
  setCompleted: (completed: number) => void;
}

interface PossibleHabits {
  id: string;
  title: string;
  created_at: string;
}

interface DayInfo {
  completedHabits: string[];
  possibleHabits: PossibleHabits[];
}

export function HabitsList({ date, setCompleted }: Props) {
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery(['day', date], () => getInfoByDay(date.toISOString()));

  const [dayInfo, setDayInfo] = useState<DayInfo | null>(null);

  const isDayInPast = dayjs(date).endOf('day').isBefore(new Date(), 'day');

  const mutation = useMutation({
    mutationFn: updateToggleHabit,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['day', date] });
    },
  });

  const handleToggleHabit = (habitId: string) => {
    mutation.mutate(habitId);

    const isHabitCompleted = dayInfo!.completedHabits.includes(habitId);

    let completedHabits: string[] = [];

    if (isHabitCompleted) {
      completedHabits = dayInfo!.completedHabits.filter((id) => id !== habitId);
    } else {
      completedHabits = [...dayInfo!.completedHabits, habitId];
    }

    setCompleted(completedHabits.length);
    setDayInfo({ ...dayInfo!, completedHabits });
  };

  useEffect(() => {
    if (data) {
      setDayInfo(data);
    }
  }, [data]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <span>Error</span>;
  }

  return (
    <div className="mt-6 flex flex-col gap-3">
      {dayInfo?.possibleHabits.map((habit: PossibleHabits) => (
        <Checkbox.Root
          className="flex items-center gap-3 group"
          key={habit.id}
          checked={dayInfo?.completedHabits.includes(habit.id)}
          disabled={isDayInPast}
          onCheckedChange={() => handleToggleHabit(habit.id)}
        >
          <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-violet-500 group-data-[state=checked]:border-violet-500 transition-all duration-400">
            <Checkbox.Indicator>
              <Check size={20} color="white" />
            </Checkbox.Indicator>
          </div>
          <span className="font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400">
            {habit.title}
          </span>
        </Checkbox.Root>
      ))}
    </div>
  );
}
