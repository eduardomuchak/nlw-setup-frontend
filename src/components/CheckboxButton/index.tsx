import * as Checkbox from '@radix-ui/react-checkbox';
import { useQuery } from '@tanstack/react-query';
import { Check } from 'phosphor-react';
import { getInfoByDay } from '../../services/day';
import { Loading } from '../Loading';

interface Props {
  date: Date;
}

interface PossibleHabits {
  id: string;
  title: string;
  created_at: string;
}

// interface DayInfo {
//   possibleHabits: PossibleHabits[];
//   completedHabits: string[];
// }

export function CheckboxButton({ date }: Props) {
  const { isLoading, error, data: dayInfo } = useQuery(['day'], () => getInfoByDay(date.toISOString()));

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <span>Error</span>;
  }

  console.log('day info', dayInfo);

  return (
    <div className="mt-6 flex flex-col gap-3">
      {dayInfo?.possibleHabits.map((habit: PossibleHabits) => (
        <Checkbox.Root
          className="flex items-center gap-3 group"
          key={habit.id}
          checked={dayInfo?.completedHabits.includes(habit.id)}
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
