import React from 'react';
import PlusSvg from '~/assets/svgs/plus.svg';
import { Container } from './styles';

const AddTabButton = ({ openExpenseModal }) => {
  return (
    <Container onPress={openExpenseModal}>
      <PlusSvg width={24} height={24} fill="white" />
    </Container>
  );
};

export default AddTabButton;
