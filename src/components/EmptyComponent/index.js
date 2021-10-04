import React from 'react';
import { Container, SvgView } from './styles';
import EmptyMoney from '~/assets/svgs/money-bill-slash.svg';
import MoneyText from '../MoneyText';

export function EmptyComponent({ size, message, color }) {
  return (
    <Container>
      <SvgView>
        <EmptyMoney width={size} height={size} fill={color} />
      </SvgView>
      <MoneyText size={18} align="center" color="opacity">
        {message}
      </MoneyText>
    </Container>
  );
}
