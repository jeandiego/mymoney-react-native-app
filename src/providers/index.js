import React, { createContext, useRef, useState } from 'react';

export const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const [language, setLanguage] = useState('PT-BR');
  const modalizeRef = useRef(null);

  function handleExpense(_expense) {
    setExpense(_expense);
    modalizeRef?.current.open();
  }

  return (
    <GlobalContext.Provider
      value={{
        language,
        setLanguage,
        isEditing,
        setIsEditing,
        expenses,
        setExpenses,
        expense,
        setExpense,
        handleExpense,
        modalizeRef,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
