import React from 'react';
import MoneyText from '~/components/MoneyText';
import { Container } from './styles';

const HomeView = () => {
  return (
    <Container>
      <MoneyText color="secondary" size={44} fontWeight="bold">
        Hello, world
      </MoneyText>
    </Container>
  );
};

export default HomeView;
