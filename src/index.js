import React from 'react';
import { StatusBar } from 'react-native';
import { Host } from 'react-native-portalize';
import GlobalStyle from './global/styles';
import { Routes } from './routes';
import './configs/reactotron';
import '~/lang';
import { AuthProvider } from '~/hooks/auth';
import { GlobalProvider } from './context';

const App = () => {
  return (
    <GlobalStyle>
      <Host>
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
      </Host>
    </GlobalStyle>
  );
};

export default App;
