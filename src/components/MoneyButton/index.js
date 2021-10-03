import React from 'react';
import { TouchableOpacity } from 'react-native';
import MoneyText from '../MoneyText';
import { Container, GradientContainer } from './styles';

const NormalButton = ({ color, size, fontWeight, children, ...rest }) => {
  return (
    <Container {...rest}>
      <MoneyText size={size} color={color} fontWeight={fontWeight}>
        {children}
      </MoneyText>
    </Container>
  );
};

const GradientButton = ({ color, size, fontWeight, children, ...rest }) => {
  return (
    <TouchableOpacity style={{ width: '100%' }} {...rest}>
      <GradientContainer {...rest}>
        <MoneyText size={size} color={color} fontWeight={fontWeight}>
          {children}
        </MoneyText>
      </GradientContainer>
    </TouchableOpacity>
  );
};

const MoneyButton = ({ gradient, ...props }) => {
  const disabled = props?.disabled;

  if (gradient) return <GradientButton {...props} disabled={disabled} />;

  return <NormalButton {...props} disabled={disabled} />;
};

export default MoneyButton;
