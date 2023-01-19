import * as Popover from '@radix-ui/react-popover';
import ProgressBar from '../ProgressBar';

function DaySquare() {
  return (
    <Popover.Root>
      <Popover.Trigger className={'w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg '} />

      <Popover.Portal>
        <Popover.Content className="min-w-[320px] w-full p-6 rounded-2xl bg-zinc-900 flex flex-col">
          <Popover.Arrow width={16} height={8} className="fill-zinc-900" />
          <span className="font-semibold text-zinc-400">Segunda-feira</span>
          <span className="mt-1 font-extrabold text-3xl leading-tight">01/01</span>
          <ProgressBar />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

export default DaySquare;
