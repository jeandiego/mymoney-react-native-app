import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MoneyText from '~/components/MoneyText';
import MoneyContent from '~/components/MoneyView/Content';
import SecondaryCard from '~/components/SecondaryCard';
import { GlobalContext } from '~/providers';
import { Container } from './styles';

const ReleasesView = () => {
  const { expenses } = useContext(GlobalContext);
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();

  return (
    <Container>
      <MoneyContent
        background="primary"
        pTop={insets.top}
        pBottom={insets.bottom}
        pHorizontal={16}>
        <MoneyText size={RFValue(22)} fontWeight="medium" color="shape">
          {t('RELEASES.TITLE')}
        </MoneyText>
      </MoneyContent>
      <MoneyContent pVertical={24} pHorizontal={16} flex={1}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={expenses}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <SecondaryCard key={item.id} expense={item} />
          )}
        />
      </MoneyContent>
    </Container>
  );
};

export default ReleasesView;
