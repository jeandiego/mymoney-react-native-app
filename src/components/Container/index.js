import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Container } from './styles';

const GlobalContainer = ({ ...rest }) => {
  const insets = useSafeAreaInsets();

  return <Container safeArea={insets} {...rest} />;
};

export default GlobalContainer;
