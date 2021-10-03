/* eslint-disable no-underscore-dangle */
import React, { useContext, useEffect, useState } from 'react';
import { Modalize } from 'react-native-modalize';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import dayjs from 'dayjs';
import { Alert } from 'react-native';
import DatePicker from 'react-native-date-picker';
import {
  ContentView,
  FooterView,
  HeaderView,
  HeaderWrapper,
  InputView,
  ContentWrapper,
  CurrencyInputMoney,
  DateButton,
} from './styles';
import MoneyText from '../MoneyText';
import MoneyInput from '../MoneyInput';
import MoneyButton from '../MoneyButton';
import { createNewExpense, editExpense } from '~/controller/expenseController';
import { GlobalContext } from '~/providers';

const NewExpenseModal = ({ modalRef }) => {
  const themeContext = useContext(ThemeContext);
  const { expense, setExpenses, isEditing, setIsEditing } =
    useContext(GlobalContext);
  const { t } = useTranslation();
  const [focus, setFocus] = useState({
    item: false,
    date: false,
    additional: false,
  });
  const [value, setValue] = useState('');
  const [item, setItem] = useState('');
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState('');
  const [open, setOpen] = useState(false);

  function clearExpense() {
    setValue();
    setItem();
    setDate(new Date());
    setNotes();
  }

  const handleEditExpense = async () => {
    const editedExpense = {
      date: dayjs(date).format('YYYY-MM-DD'),
      item,
      value,
      additionalInfo: { notes },
    };

    const results = await editExpense(expense._id, editedExpense);

    if (results.shouldContinue) {
      setExpenses((expenses) =>
        expenses
          .map((_expense) =>
            _expense._id === expense._id
              ? { ...editedExpense, _id: expense._id }
              : _expense,
          )
          .sort((a, b) => dayjs(b.date).diff(dayjs(a.date), 'd')),
      );
      modalRef.current?.close();
      clearExpense();
    } else {
      Alert.alert(t('ALERT.ERROR2'));
    }
  };

  const handleNewExpense = async () => {
    const newExpense = {
      date: dayjs(date).format('YYYY-MM-DD'),
      item,
      value,
      additionalInfo: { notes },
    };
    const results = await createNewExpense(newExpense);

    if (results.shouldContinue) {
      setExpenses((expenses) =>
        [{ ...newExpense, _id: results.id }, ...expenses].sort((a, b) =>
          dayjs(b.date).diff(dayjs(a.date), 'd'),
        ),
      );
      modalRef.current?.close();
      clearExpense();
    } else {
      Alert.alert(t('ALERT.ERROR1'));
    }
  };

  useEffect(() => {
    if (isEditing) {
      setValue(expense?.value);
      setItem(expense?.item);
      setDate(new Date(expense?.date));
      setNotes(expense?.additionalInfo?.notes);
    } else {
      clearExpense();
    }
  }, [isEditing]);

  return (
    <Modalize
      onClose={() => setIsEditing(false)}
      scrollViewProps={{
        contentContainerStyle: {
          flex: 1,
        },
      }}
      ref={modalRef}
      disableScrollIfPossible
      modalStyle={{
        backgroundColor: themeContext.colors.card_background,
      }}
      HeaderComponent={
        <HeaderView>
          <HeaderWrapper>
            <MoneyText color="shape">
              {isEditing ? t('ADD.EDITING') : t('ADD.TITLE')}
            </MoneyText>

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
              keyboardType="numeric"
            />
          </HeaderWrapper>
        </HeaderView>
      }>
      <ContentView>
        <ContentWrapper>
          <InputView>
            <MoneyText
              size={14}
              fontWeight="medium"
              color={focus.item ? 'primary' : 'text'}>
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
            <DateButton onPress={() => setOpen(true)}>
              <MoneyText>{dayjs(date).format('DD-MM-YYYY')}</MoneyText>
            </DateButton>
          </InputView>
          <InputView>
            <MoneyText
              size={14}
              fontWeight="medium"
              color={focus.additional ? 'primary' : 'text'}>
              {t('ADD.ADDITIONAL_INFO')}
            </MoneyText>
            <MoneyInput
              multiline
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
          {isEditing ? (
            <MoneyButton
              background="negative"
              pVertical={16}
              color="shape"
              size={RFValue(16)}
              fontWeight="medium"
              onPress={handleEditExpense}>
              {t('ADD.BUTTON_EDITING')}
            </MoneyButton>
          ) : (
            <MoneyButton
              background="negative"
              pVertical={16}
              color="shape"
              size={RFValue(16)}
              fontWeight="medium"
              onPress={handleNewExpense}>
              {t('ADD.BUTTON_ADD')}
            </MoneyButton>
          )}
        </FooterView>
      </ContentView>
      <DatePicker
        modal
        mode="date"
        open={open}
        date={date}
        onConfirm={(_date) => {
          setOpen(false);
          setDate(_date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </Modalize>
  );
};

export default NewExpenseModal;
