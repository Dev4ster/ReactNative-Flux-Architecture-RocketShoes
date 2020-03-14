import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.50:3332',
});

export default api;
