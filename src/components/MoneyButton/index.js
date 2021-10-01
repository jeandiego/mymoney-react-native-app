import React from 'react';
import MoneyText from '../MoneyText';
import { Container } from './styles';

const MoneyButton = ({ color, size, fontWeight, children, ...rest }) => {
  return (
    <Container {...rest}>
      <MoneyText size={size} color={color} fontWeight={fontWeight}>
        {children}
      </MoneyText>
    </Container>
  );
};

export default MoneyButton;
