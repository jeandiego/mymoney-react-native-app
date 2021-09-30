import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { userStorageKey } from '~/utils/constants';

const userStoraged = AsyncStorage.getItem(userStorageKey);

const api = axios.create({
  baseURL: 'https://sofit-mobile-challenge.herokuapp.com/',

  timeout: 1000,
  headers: {
    ...(userStoraged?.token
      ? { Authorization: `Bearer ${userStoraged?.token}` }
      : {}),
    'Content-type': 'application/json',
  },
});

export default api;
