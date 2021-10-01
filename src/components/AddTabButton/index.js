import React from 'react';
import { Portal } from 'react-native-portalize';
import NewExpenseModal from '../NewExpenseModal';
import PlusSvg from '~/assets/svgs/plus.svg';

import { Container } from './styles';

const AddTabButton = ({ onPress, modalRef }) => {
  return (
    <Container onPress={onPress}>
      <PlusSvg width={24} height={24} fill="white" />

      <Portal>
        <NewExpenseModal modalRef={modalRef} />
      </Portal>
    </Container>
  );
};

export default AddTabButton;
