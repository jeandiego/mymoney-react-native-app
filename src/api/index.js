import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sofit-mobile-challenge.herokuapp.com/',

  timeout: 1000,
  headers: {
    'Content-type': 'application/json',
  },
});

export function configureAuthHeader(token) {
  api.defaults.headers.Authorization = `Bearer ${token}`;
}

export default api;
