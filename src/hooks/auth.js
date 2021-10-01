/* eslint-disable no-underscore-dangle */

import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userStorageKey } from '~/utils/constants';
import api from '~/api';

export const AuthContext = createContext([]);

function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [loadingUserStorage, setLoadingUserStorage] = useState(true);

  async function signInWithEmail(username, userEmail) {
    try {
      const results = await api.get(`/start/${userEmail}`);

      const userInfo = { ...results.data, username };

      setUser(userInfo);

      await AsyncStorage.setItem(userStorageKey, JSON.stringify(userInfo));
    } catch (error) {
      throw new Error(error);
    }
  }

  async function loadUserStorageData() {
    const userStoraged = await AsyncStorage.getItem(userStorageKey);

    if (userStoraged) {
      const userLogged = JSON.parse(userStoraged);
      setUser(userLogged);
    }
    setLoadingUserStorage(false);
  }

  useEffect(() => {
    loadUserStorageData();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, loadingUserStorage, setUser, signInWithEmail }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
