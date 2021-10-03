import React from 'react';
import PlusSvg from '~/assets/svgs/plus.svg';
import { Container, GradientBg } from './styles';

const AddTabButton = ({ openExpenseModal }) => {
  return (
    <Container onPress={openExpenseModal}>
      <GradientBg>
        <PlusSvg width={24} height={24} fill="white" />
      </GradientBg>
    </Container>
  );
};

export default AddTabButton;
