import React from 'react';
import { useTranslation } from 'react-i18next';
import { RFValue } from 'react-native-responsive-fontsize';
import MoneyText from '../MoneyText';
import MoneyContent from '../MoneyView/Content';

import { Container } from './styles';

const PrimaryCard = ({ item, title }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <MoneyContent
        background="shape"
        flexDir="column"
        justify="space-around"
        pLeft={16}
        pTop={16}>
        <item.icon width={34} height={34} />
        <MoneyContent flexDir="column" pTop={24} pBottom={24}>
          <MoneyText color="text" fontWeight="regular" size={14} pBottom={8}>
            {t(`MONEY.TYPE_${title}`)}
          </MoneyText>
          <MoneyText fontWeight="medium" size={RFValue(20)}>
            $ 40.384,80
          </MoneyText>
        </MoneyContent>
      </MoneyContent>
    </Container>
  );
};

export default PrimaryCard;
