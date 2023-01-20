import { api } from '../lib/axios';

interface Habit {
  title: string;
  weekDays: number[];
}

export const createHabit = async (payload: Habit) => {
  const { data } = await api.post('/habits', payload);
  return data;
};
