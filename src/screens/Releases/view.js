/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Portal } from 'react-native-portalize';
import MoneyText from '~/components/MoneyText';
import MoneyContent from '~/components/MoneyView/Content';
import SecondaryCard from '~/components/SecondaryCard';
import { Container, HeaderView } from './styles';
import OptionsModal from '~/components/OptionsModal';
import SearchBar from '~/components/SearchBar';

const ReleasesView = ({ expense, expenses, handleExpense, modalizeRef }) => {
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();

  return (
    <Container>
      <HeaderView safeArea={insets}>
        <MoneyText
          size={RFValue(22)}
          fontWeight="medium"
          color="shape"
          pTop={8}
          pBottom={8}>
          {t('RELEASES.TITLE')}
        </MoneyText>
      </HeaderView>
      <SearchBar />
      <MoneyContent pVertical={24} pHorizontal={16} flex={1}>
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
        <OptionsModal modalRef={modalizeRef} expense={expense} />
      </Portal>
    </Container>
  );
};

export default ReleasesView;
