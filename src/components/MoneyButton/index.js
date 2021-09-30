import React from 'react';
import MoneyText from '../MoneyText';
import { Container } from './styles';

const MoneyButton = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      <MoneyText {...rest}>{children}</MoneyText>
    </Container>
  );
};

export default MoneyButton;
