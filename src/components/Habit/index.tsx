interface Props {
  completed: number;
}

function Habit({ completed }: Props) {
  return (
    <>
      <div className={'bg-zinc-600 w-10 h-10 flex items-center justify-center'}>{completed}</div>
    </>
  );
}

export default Habit;
