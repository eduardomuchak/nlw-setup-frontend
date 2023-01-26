import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://nlw-setup-zokt.onrender.com',
});
