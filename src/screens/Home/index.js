/* eslint-disable react/jsx-no-bind */
import React, { useContext, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { getExpenses } from '~/controller/expenseController';
import { GlobalContext } from '~/providers';
import HomeView from './view';

const Home = () => {
  const { expense, expenses, setExpenses, modalizeRef, handleExpense } =
    useContext(GlobalContext);
  const navigation = useNavigation();

  async function Initicalize() {
    const userExpenses = await getExpenses();

    setExpenses(userExpenses);
  }

  function handleAllExpenses() {
    navigation.navigate('Releases');
  }

  useEffect(() => {
    Initicalize();
  }, []);

  return (
    <HomeView
      expenses={expenses}
      handleExpense={handleExpense}
      modalRef={modalizeRef}
      expense={expense}
      handleAllExpenses={handleAllExpenses}
    />
  );
};

export default Home;
