import React, { useContext, useState } from 'react';
import { Modalize } from 'react-native-modalize';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  ContentView,
  FooterView,
  HeaderView,
  HeaderWrapper,
  InputView,
  ContentWrapper,
} from './styles';
import MoneyText from '../MoneyText';
import MoneyInput from '../MoneyInput';
import MoneyButton from '../MoneyButton';

const NewExpenseModal = ({ modalRef }) => {
  const themeContext = useContext(ThemeContext);
  const { t } = useTranslation();
  const [focus, setFocus] = useState({
    value: false,
    item: false,
    date: false,
    additional: false,
  });

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
            <MoneyInput
              placeholder={t('ADD.PLACEHOLDER_VALUE')}
              size={48}
              alignText="center"
              placeColor="opacityWhite"
              color="shape"
              weight="bold"
              borderBottom={0.1}
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
            <MoneyInput placeholder={t('ADD.PLACEHOLDER_DATE')} />
          </InputView>
          <InputView>
            <MoneyText size={14} fontWeight="medium" color="text">
              {t('ADD.ADDITIONAL_INFO')}
            </MoneyText>
            <MoneyInput
              // multiline
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
            onPress={() => {}}>
            {t('ADD.BUTTON_ADD')}
          </MoneyButton>
        </FooterView>
      </ContentView>
    </Modalize>
  );
};

export default NewExpenseModal;
