/* eslint-disable no-underscore-dangle */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './RootNavigation';

import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';

import { useAuth } from '../hooks/auth';

export function Routes({ openExpenseModal }) {
  const { user } = useAuth();

  return (
    <NavigationContainer ref={navigationRef}>
      {user._id ? (
        <AppRoutes openExpenseModal={openExpenseModal} />
      ) : (
        <AuthRoutes />
      )}
    </NavigationContainer>
  );
}
