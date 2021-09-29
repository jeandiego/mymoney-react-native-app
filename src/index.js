import React from 'react';
import { StatusBar } from 'react-native';
import GlobalStyle from './global/styles';
import { Routes } from './routes';

const App = () => {
  return (
    <GlobalStyle>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Routes />
    </GlobalStyle>
  );
};

export default App;
