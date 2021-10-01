import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';

const GlobalStyle = (props) => {
  const isOnDarkMode = useColorScheme() === 'dark';

  return (
    <ThemeProvider
      theme={{ colors: isOnDarkMode ? darkTheme : lightTheme }}
      {...props}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      {props.children}
    </ThemeProvider>
  );
};

export default GlobalStyle;
