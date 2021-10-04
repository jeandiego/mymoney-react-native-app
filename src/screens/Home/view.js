/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { RFValue } from 'react-native-responsive-fontsize';
import { FlatList } from 'react-native';
import { Portal } from 'react-native-portalize';
import Header from '~/components/Header';
import PrimaryCard from '~/components/PrimaryCard';
import { Container } from './styles';
import { types } from '~/utils/types';
import MoneyText from '~/components/MoneyText';
import MoneyContent from '~/components/MoneyView/Content';
import SecondaryCard from '~/components/SecondaryCard';
import OptionsModal from '~/components/OptionsModal';

const HomeView = ({
  expenses,
  handleExpense,
  modalRef,
  expense,
  handleAllExpenses,
  handleRegionLanguage,
}) => {
  const insets = useSafeAreaInsets();
  const { t } = useTranslation();

  return (
    <Container safeArea={insets}>
      <Header onPress={handleRegionLanguage} />
      <MoneyContent justify="space-between" mTop={-50} pHorizontal={8}>
        {types.map((type) => (
          <PrimaryCard
            key={type.id}
            item={type}
            title={type.title}
            onPress={handleAllExpenses}
          />
        ))}
      </MoneyContent>
      <MoneyContent pHorizontal={16} pVertical={16}>
        <MoneyText size={RFValue(16)} fontWeight="medium">
          {t('HOME.RELEASES')}
        </MoneyText>
      </MoneyContent>
      <MoneyContent pHorizontal={16} flex={1}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={expenses}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <SecondaryCard
              onPress={() => handleExpense(item)}
              key={item._id}
              expense={item}
            />
          )}
        />
      </MoneyContent>
      <Portal>
        <OptionsModal modalRef={modalRef} expense={expense} />
      </Portal>
    </Container>
  );
};

export default HomeView;
