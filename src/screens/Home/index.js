/* eslint-disable react/jsx-no-bind */
import React, { useContext, useEffect, useRef } from 'react';
import { getExpenses } from '~/controller/expenseController';
import { GlobalContext } from '~/providers';
import HomeView from './view';

const Home = ({ openOptionsModal }) => {
  const { expense, setExpense, expenses, setExpenses } =
    useContext(GlobalContext);

  const modalizeRef = useRef(null);

  async function Initicalize() {
    const userExpenses = await getExpenses();

    setExpenses(userExpenses);
  }

  function handleExpense(_expense) {
    setExpense(_expense);
    modalizeRef?.current.open();
  }

  useEffect(() => {
    Initicalize();
  }, []);

  return (
    <HomeView
      expenses={expenses}
      handleExpense={handleExpense}
      onPress={openOptionsModal}
      modalRef={modalizeRef}
      expense={expense}
    />
  );
};

export default Home;
