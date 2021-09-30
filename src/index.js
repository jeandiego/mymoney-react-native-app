import React from 'react';
import { StatusBar } from 'react-native';
import GlobalStyle from './global/styles';
import { Routes } from './routes';
import './configs/reactotron';
import '~/lang';
import { AuthProvider } from '~/hooks/auth';
import { GlobalProvider } from './context';

const App = () => {
  return (
    <GlobalStyle>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <AuthProvider>
        <GlobalProvider>
          <Routes />
        </GlobalProvider>
      </AuthProvider>
    </GlobalStyle>
  );
};

export default App;
