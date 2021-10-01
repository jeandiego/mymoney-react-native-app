/* eslint-disable react/jsx-no-bind */
import React, { useContext, useEffect } from 'react';
import { deleteExpense, getExpenses } from '~/controller/expenseController';
import { GlobalContext } from '~/providers';
import HomeView from './view';

const Home = () => {
  const { expenses, setExpenses } = useContext(GlobalContext);

  async function Initicalize() {
    const userExpenses = await getExpenses();

    setExpenses(userExpenses);
  }

  async function handleDeleteExpense(id) {
    await deleteExpense(id);
  }

  useEffect(() => {
    Initicalize();
  }, []);

  return (
    <HomeView expenses={expenses} handleDeleteExpense={handleDeleteExpense} />
  );
};

export default Home;
