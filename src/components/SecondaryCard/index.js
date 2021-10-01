import dayjs from 'dayjs';
import React from 'react';
import { valueToPrice } from '~/utils/value';
import MoneyText from '../MoneyText';
import MoneyContent from '../MoneyView/Content';
import { ExpenseCard, TypeBar } from './styles';

const SecondaryCard = ({ expense, onPress }) => {
  return (
    <ExpenseCard onPress={onPress}>
      <MoneyText size={12} color="text" fontWeight="light">
        {dayjs(expense?.date).format('DD/MM/YYYY')}
      </MoneyText>

      <MoneyContent
        flexDir="row"
        justify="space-between"
        alignItem="center"
        pVertical={8}>
        <MoneyText numberOfLines={2}>{expense?.item}</MoneyText>

        <MoneyText size={16} color="negative" fontWeight="medium">
          {valueToPrice(expense?.value)}
        </MoneyText>
      </MoneyContent>
      <MoneyContent>
        <MoneyText size={14} color="text">
          {expense?.additionalInfo?.notes}
        </MoneyText>
      </MoneyContent>
      <TypeBar />
    </ExpenseCard>
  );
};

export default SecondaryCard;
