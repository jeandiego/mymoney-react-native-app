import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Container } from './styles';
import Profile from '../Profile';

const Header = ({ onPress }) => {
  const insets = useSafeAreaInsets();

  return (
    <Container safeArea={insets}>
      <Profile onPress={onPress} />
    </Container>
  );
};

export default Header;
