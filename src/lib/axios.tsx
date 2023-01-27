import axios from 'axios';

const url = import.meta.env.VITE_API_BACKEND;

export const api = axios.create({
  baseURL: url,
});
