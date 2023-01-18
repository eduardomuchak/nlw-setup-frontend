import DaySquare from '../DaySquare';

function SummaryTable() {
  const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

  return (
    <div className={'w-full flex '}>
      <div className={'grid grid-rows-7 grid-flow-row gap-3'}>
        {weekDays.map((day, index) => (
          <div key={index} className={'text-zinc-400 text-xl h-10 w-10 flex items-center justify-center'}>
            {day}
          </div>
        ))}
      </div>
      <div className={'grid grid-rows-7 grid-flow-col gap-3'}>
        <DaySquare />
        <DaySquare />
        <DaySquare />
        <DaySquare />
        <DaySquare />
        <DaySquare />
        <DaySquare />
      </div>
    </div>
  );
}

export default SummaryTable;
