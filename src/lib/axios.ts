import axios from 'axios';

const apiKey = import.meta.env.VITE_KEY_API_TMDB;

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

api.interceptors.request.use(config => {
  config.params = {
    ...config.params,
    api_key: apiKey,
  };
  return config;
});
