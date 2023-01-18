import dayjs from 'dayjs';

export function generateDatesFromYearBeginning(year: number) {
  const firstDayofYear = dayjs().startOf('year');
  const today = new Date();

  const dates = [];
  let currentDate = firstDayofYear;

  while (currentDate.isBefore(today)) {
    dates.push(currentDate.toDate());
    currentDate = currentDate.add(1, 'day');
  }

  return dates;
}
