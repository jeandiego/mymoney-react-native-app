import 'react-native-gesture-handler';
import React, { Fragment, useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeContext } from 'styled-components';
import Home from '~/screens/Home';
import Releases from '~/screens/Releases';
import NavHomeSvg from '~/assets/svgs/estate.svg';
import ListSvg from '~/assets/svgs/list-ul.svg';
import AddTabButton from '~/components/AddTabButton';

const Tab = createBottomTabNavigator();

export function AppRoutes({ openExpenseModal }) {
  const {
    colors: { primary, text },
  } = useContext(ThemeContext);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          switch (route.name) {
            case 'Home':
              return (
                <NavHomeSvg
                  width={24}
                  height={24}
                  fill={focused ? primary : text}
                />
              );
            case 'Releases':
              return (
                <ListSvg
                  fill={focused ? primary : text}
                  width={24}
                  height={24}
                />
              );
            default:
              break;
          }
        },
        headerShown: false,
        tabBarActiveTintColor: primary,
        tabBarInactiveTintColor: text,
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="Create"
        component={Fragment}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
          },
        }}
        options={{
          tabBarIcon: () => (
            <AddTabButton openExpenseModal={openExpenseModal} />
          ),
        }}
      />
      <Tab.Screen name="Releases" component={Releases} />
    </Tab.Navigator>
  );
}
