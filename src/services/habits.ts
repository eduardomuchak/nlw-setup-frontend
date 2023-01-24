import { api } from '../lib/axios';

interface Habit {
  title: string;
  weekDays: number[];
}

export const createHabit = async (payload: Habit) => {
  const { data } = await api.post('/habits', payload);
  return data;
};

export const getHabits = async () => {
  const { data } = await api.get('/habits');
  return data;
};

export const updateToggleHabit = async (habitId: string) => {
  const { data } = await api.patch(`/habits/${habitId}/toggle`);
  return data;
};

export const updateHabit = async (habitId: string, payload: Habit) => {
  const { data } = await api.patch(`/habits/${habitId}`, payload);
  return data;
};

export const deleteHabit = async (habitId: string) => {
  const { data } = await api.delete(`/habits/${habitId}`);
  return data;
};
