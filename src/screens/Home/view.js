/* eslint-disable no-underscore-dangle */
import React, { useContext } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { RFValue } from 'react-native-responsive-fontsize';
import { FlatList } from 'react-native';
import Header from '~/components/Header';
import PrimaryCard from '~/components/PrimaryCard';
import { Container } from './styles';
import { types } from '~/utils/types';
import MoneyText from '~/components/MoneyText';
import MoneyContent from '~/components/MoneyView/Content';
import SecondaryCard from '~/components/SecondaryCard';
import { GlobalContext } from '~/providers';

const HomeView = ({ expenses, handleDeleteExpense }) => {
  const { refresh, setExpenses } = useContext(GlobalContext);
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
      <MoneyContent pHorizontal={16} flex={1}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={expenses}
          extraData={refresh}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <SecondaryCard
              onPress={() => handleDeleteExpense(item._id)}
              key={item.id}
              expense={item}
            />
          )}
        />
      </MoneyContent>
    </Container>
  );
};

export default HomeView;
