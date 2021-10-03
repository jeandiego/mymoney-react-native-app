import React, { useContext } from 'react';
import { GlobalContext } from '~/providers';
import ReleasesView from './view';

const Releases = () => {
  const { expense, expenses, modalizeRef, handleExpense } =
    useContext(GlobalContext);

  return (
    <ReleasesView
      expense={expense}
      expenses={expenses}
      modalizeRef={modalizeRef}
      handleExpense={handleExpense}
    />
  );
};

export default Releases;
