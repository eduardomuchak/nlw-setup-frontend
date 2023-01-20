import { api } from '../lib/axios';

export const getSummary = async () => {
  const response = await api.get('/summary');
  return response.data;
};
