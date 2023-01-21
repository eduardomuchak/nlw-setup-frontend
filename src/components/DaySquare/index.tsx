import * as Popover from '@radix-ui/react-popover';
import clsx from 'clsx';
import ProgressBar from '../ProgressBar';
import { HabitsList } from '../HabitsList';
import dayjs from 'dayjs';
import { useState } from 'react';

interface Props {
  defaultCompleted?: number;
  amount?: number;
  date: Date;
}

function DaySquare({ defaultCompleted = 0, amount = 0, date }: Props) {
  const [completed, setCompleted] = useState(defaultCompleted);

  const progress = amount > 0 ? (completed / amount) * 100 : 0;

  const dayAndMonth = dayjs(date).format('DD/MM');
  const dayOfWeek = dayjs(date).format('dddd');

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx('w-10 h-10 border-2 rounded-lg', {
          'bg-zinc-900 border-zinc-800': progress === 0,
          'bg-violet-900 border-violet-800': progress > 0 && progress < 20,
          'bg-violet-800  border-violet-700': progress >= 20 && progress < 40,
          'bg-violet-700  border-violet-600': progress >= 40 && progress < 60,
          'bg-violet-600  border-violet-500': progress >= 60 && progress < 80,
          'bg-violet-500 border-violet-400': progress >= 80,
        })}
      />

      <Popover.Portal>
        <Popover.Content className="min-w-[320px] w-full p-6 rounded-2xl bg-zinc-900 flex flex-col">
          <Popover.Arrow width={16} height={8} className="fill-zinc-900" />
          <span className="font-semibold text-zinc-400">{dayOfWeek}</span>
          <span className="mt-1 font-extrabold text-3xl leading-tight">{dayAndMonth}</span>

          <ProgressBar progress={progress} />

          <HabitsList date={date} setCompleted={setCompleted} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

export default DaySquare;
