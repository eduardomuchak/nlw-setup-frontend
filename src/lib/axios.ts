import axios from 'axios';

const REACT_APP_API_URL = 'http://localhost:8080';

export const api = axios.create({
  baseURL: REACT_APP_API_URL,
});
