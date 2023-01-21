import { useQuery } from '@tanstack/react-query';
import { generateDatesFromYearBeginning } from '../../utils/generate-dates-from-year-beginning';
import DaySquare from '../DaySquare';
import { getSummary } from '../../services/summary';
import { Loading } from '../Loading';
import { RequestError } from '../RequestError';
import dayjs from 'dayjs';

type Summary = {
  id: string;
  date: string;
  amount: number;
  completed: number;
};

function SummaryTable() {
  const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

  const summaryDays = generateDatesFromYearBeginning(2023);

  const minimumSummaryDaysSize = 18 * 7;
  const amountOfDaysToFill = minimumSummaryDaysSize - summaryDays.length;

  const { isLoading, error, data: summary } = useQuery({ queryKey: ['summary'], queryFn: getSummary });

  if (isLoading) return <Loading />;
  if (error) return <RequestError />;

  return (
    <div className={'w-full flex'}>
      <div className={'grid grid-rows-7 grid-flow-row gap-3'}>
        {weekDays.map((day, index) => (
          <div key={`${index}-${day}`} className={'text-zinc-400 text-xl h-10 w-10 flex items-center justify-center'}>
            {day}
          </div>
        ))}
      </div>
      <div className={'grid grid-rows-7 grid-flow-col gap-3'}>
        {summaryDays.map((date) => {
          if (summary.length) {
            const dayInSummary: Summary = summary.find((summaryDay: Summary) => {
              return dayjs(date).isSame(summaryDay.date, 'day');
            });
            return (
              <DaySquare
                key={date.toString()}
                amount={dayInSummary?.amount}
                defaultCompleted={dayInSummary?.completed}
                date={date}
              />
            );
          }
        })}
        {amountOfDaysToFill > 0
          ? Array.from({ length: amountOfDaysToFill }).map((_, index) => (
              <div
                className={'w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed'}
                key={index}
              />
            ))
          : null}
      </div>
    </div>
  );
}

export default SummaryTable;
