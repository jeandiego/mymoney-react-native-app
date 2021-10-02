/* eslint-disable no-underscore-dangle */
import React, { useContext, useRef } from 'react';
import { Modalize } from 'react-native-modalize';
import { ThemeContext } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Portal } from 'react-native-portalize';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { ContentView, HeaderView } from './styles';
import MoneyText from '../MoneyText';
import OptionButton from '../OptionButton';
import { deleteExpense } from '~/controller/expenseController';
import { GlobalContext } from '~/providers';
import NewExpenseModal from '../NewExpenseModal';

const OptionsModal = ({ modalRef, expense }) => {
  const { colors } = useContext(ThemeContext);
  const { setIsEditing, setExpenses } = useContext(GlobalContext);
  const { t } = useTranslation();
  const modalizeRef = useRef(null);

  return (
    <Modalize
      ref={modalRef}
      modalHeight={RFPercentage(30)}
      disableScrollIfPossible
      modalStyle={{
        backgroundColor: colors.shape,
      }}
      HeaderComponent={
        <HeaderView>
          <MoneyText fontWeight="medium" color="text">
            {t('OPTIONS.HEADER')}
          </MoneyText>
        </HeaderView>
      }>
      <ContentView>
        <OptionButton
          onPress={() => {
            setIsEditing(true);
            modalizeRef.current?.open();
          }}
          type="EDIT"
        />
        <OptionButton
          onPress={() => {
            deleteExpense(expense?._id);
            modalRef.current?.close();

            setExpenses((expenses) =>
              expenses.filter((_expense) => expense._id !== _expense._id),
            );
          }}
          type="DELETE"
        />
      </ContentView>
      <Portal>
        <NewExpenseModal modalRef={modalizeRef} />
      </Portal>
    </Modalize>
  );
};

export default OptionsModal;
