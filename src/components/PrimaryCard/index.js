import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { RFValue } from 'react-native-responsive-fontsize';
import { GlobalContext } from '~/providers';
import { valueToPrice } from '~/utils/value';
import MoneyText from '../MoneyText';
import MoneyContent from '../MoneyView/Content';

import { Container } from './styles';

const PrimaryCard = ({ item, title, ...rest }) => {
  const { t } = useTranslation();
  const { expenses } = useContext(GlobalContext);

  const totalExpenses = expenses.reduce(
    (totalExpense, expense) => totalExpense + expense?.value || 0,
    0,
  );

  return (
    <Container {...rest}>
      <MoneyContent
        flexDir="row"
        justify="space-between"
        alignItem="center"
        pVertical={8}>
        <MoneyText color="text" fontWeight="medium" size={18}>
          {t(`MONEY.TYPE_${title}`)}
        </MoneyText>
        <item.icon width={40} height={40} />
      </MoneyContent>
      <MoneyContent flexDir="column" pVertical={8}>
        <MoneyText fontWeight="medium" size={RFValue(32)}>
          {valueToPrice(totalExpenses)}
        </MoneyText>
      </MoneyContent>
    </Container>
  );
};

export default PrimaryCard;
