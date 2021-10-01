import React, { useContext, useState } from 'react';
import { Modalize } from 'react-native-modalize';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import dayjs from 'dayjs';
import { Alert } from 'react-native';
import {
  ContentView,
  FooterView,
  HeaderView,
  HeaderWrapper,
  InputView,
  ContentWrapper,
  CurrencyInputMoney,
} from './styles';
import MoneyText from '../MoneyText';
import MoneyInput from '../MoneyInput';
import MoneyButton from '../MoneyButton';
import { createNewExpense } from '~/controller/expenseController';
import { GlobalContext } from '~/providers';

const NewExpenseModal = ({ modalRef }) => {
  const themeContext = useContext(ThemeContext);
  const { expenses, setExpenses } = useContext(GlobalContext);
  const { t } = useTranslation();
  const [focus, setFocus] = useState({
    value: false,
    item: false,
    date: false,
    additional: false,
  });
  const [value, setValue] = useState('');
  const [item, setItem] = useState('');
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [notes, setNotes] = useState();

  const handleNewExpense = async () => {
    const results = await createNewExpense({
      date,
      item,
      value,
      additionalInfo: { notes },
    });

    if (results.shouldContinue) {
      setExpenses({
        ...expenses,
        date,
        item,
        value,
        additionalInfo: { notes },
      });
      modalRef.current?.close();
    } else {
      Alert.alert('Algo de errado');
    }
  };

  return (
    <Modalize
      scrollViewProps={{
        contentContainerStyle: {
          flex: 1,
        },
      }}
      ref={modalRef}
      disableScrollIfPossible
      modalStyle={{
        backgroundColor: themeContext.colors.background,
      }}
      HeaderComponent={
        <HeaderView>
          <HeaderWrapper>
            <MoneyText color="shape">{t('ADD.TITLE')}</MoneyText>

            <CurrencyInputMoney
              size={42}
              alignText="center"
              placeholder={t('ADD.PLACEHOLDER_VALUE')}
              placeColor="opacityWhite"
              color="shape"
              weight="bold"
              value={value}
              onChangeValue={setValue}
              prefix="R$"
              delimiter="."
              separator=","
              precision={2}
              minValue={0}
              multiline
              onFocus={() => setFocus({ ...focus, value: true })}
              onBlur={() => setFocus({ ...focus, value: false })}
              keyboardType="numeric"
            />
          </HeaderWrapper>
        </HeaderView>
      }>
      <ContentView>
        <ContentWrapper>
          <InputView>
            <MoneyText size={14} fontWeight="medium" color="text">
              {t('ADD.ITEM')}
            </MoneyText>
            <MoneyInput
              value={item}
              onChangeText={setItem}
              placeholder={t('ADD.PLACEHOLDER_ITEM')}
              isFocused={focus.item}
              onFocus={() => setFocus({ ...focus, item: true })}
              onBlur={() => setFocus({ ...focus, item: false })}
            />
          </InputView>
          <InputView>
            <MoneyText size={14} fontWeight="medium" color="text">
              {t('ADD.DATE')}
            </MoneyText>
            <MoneyInput
              placeholder={t('ADD.PLACEHOLDER_DATE')}
              value={date}
              onChangeText={setDate}
            />
          </InputView>
          <InputView>
            <MoneyText size={14} fontWeight="medium" color="text">
              {t('ADD.ADDITIONAL_INFO')}
            </MoneyText>
            <MoneyInput
              // multiline
              value={notes}
              onChangeText={setNotes}
              isFocused={focus.additional}
              onFocus={() => setFocus({ ...focus, additional: true })}
              onBlur={() => setFocus({ ...focus, additional: false })}
              placeholder={t('ADD.PLACEHOLDER_ADDITIONAL_INFO')}
            />
          </InputView>
        </ContentWrapper>
        <FooterView>
          <MoneyButton
            background="negative"
            pVertical={16}
            color="shape"
            size={RFValue(16)}
            fontWeight="medium"
            onPress={handleNewExpense}>
            {t('ADD.BUTTON_ADD')}
          </MoneyButton>
        </FooterView>
      </ContentView>
    </Modalize>
  );
};

export default NewExpenseModal;
