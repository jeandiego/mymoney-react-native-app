/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-underscore-dangle */
import React, { useContext } from 'react';
import { Modalize } from 'react-native-modalize';
import { ThemeContext } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { ContentView, HeaderView } from './styles';
import MoneyText from '../MoneyText';
import LanguageButton from '../LanguageButton';
import i18n from '~/lang';
import { GlobalContext } from '~/providers';

const LanguageModal = ({ modalRef }) => {
  const { colors } = useContext(ThemeContext);
  const { setLanguage } = useContext(GlobalContext);
  const { t } = useTranslation();

  function handlePortugueseLanguage() {
    i18n.changeLanguage('pt');
    setLanguage('PT-BR');
    modalRef.current?.close();
  }

  function handleEspanishLanguage() {
    i18n.changeLanguage('es');
    setLanguage('ES-AR');
    modalRef.current?.close();
  }

  return (
    <Modalize
      ref={modalRef}
      modalHeight={RFPercentage(30)}
      disableScrollIfPossible
      modalStyle={{
        backgroundColor: colors.card_background,
      }}
      HeaderComponent={
        <HeaderView>
          <MoneyText fontWeight="medium" color="text">
            {t('LANGUAGE.HEADER')}
          </MoneyText>
        </HeaderView>
      }>
      <ContentView>
        <LanguageButton onPress={handlePortugueseLanguage} type="BRAZIL" />
        <LanguageButton onPress={handleEspanishLanguage} type="ARGENTINA" />
      </ContentView>
    </Modalize>
  );
};

export default LanguageModal;
