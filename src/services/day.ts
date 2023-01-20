import { api } from '../lib/axios';

export const getInfoByDay = async (date: string) => {
  const { data } = await api.get('/day', {
    params: {
      date,
    },
  });
  return data;
};
