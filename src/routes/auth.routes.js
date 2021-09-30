import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '~/screens/SignIn';
import Start from '~/screens/Start';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Start" component={Start} />
      <Screen name="SignIn" component={SignIn} />
    </Navigator>
  );
}
