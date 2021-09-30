import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { RFValue } from 'react-native-responsive-fontsize';
import Header from '~/components/Header';
import PrimaryCard from '~/components/PrimaryCard';
import { Container } from './styles';
import { types } from '~/utils/types';
import MoneyText from '~/components/MoneyText';
import MoneyContent from '~/components/MoneyView/Content';

const HomeView = () => {
  const insets = useSafeAreaInsets();
  const { t } = useTranslation();

  return (
    <Container safeArea={insets}>
      <Header />
      <MoneyContent justify="space-between" mTop={-50} pHorizontal={8}>
        {types.map((type) => (
          <PrimaryCard
            key={type.id}
            item={type}
            title={type.title}
            onPress={() => {}}
          />
        ))}
      </MoneyContent>
      <MoneyContent pHorizontal={16} pVertical={16}>
        <MoneyText size={RFValue(16)} fontWeight="medium">
          {t('HOME.RELEASES')}
        </MoneyText>
      </MoneyContent>
    </Container>
  );
};

export default HomeView;
