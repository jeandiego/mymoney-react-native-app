import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { RFPercentage } from 'react-native-responsive-fontsize';
import MoneyText from '../MoneyText';
import { Container } from './styles';
import Profile from '../Profile';
import MoneyContent from '../MoneyView/Content';

const Header = () => {
  const insets = useSafeAreaInsets();
  const { t } = useTranslation();

  return (
    <Container safeArea={insets}>
      <Profile />
      <MoneyContent
        justify="center"
        alignItem="center"
        flexDir="column"
        flex={1}
        pBottom={RFPercentage(8)}>
        <MoneyText size={18} color="secondary">
          Saldo geral
        </MoneyText>
        <MoneyText size={32} color="secondary" fontWeight="bold">
          {t('MONEY.CURRENCY')}2.987,56
        </MoneyText>
      </MoneyContent>
    </Container>
  );
};

export default Header;
