import React, { createContext, useState } from 'react';

export const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState();
  const [isEditing, setIsEditing] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        isEditing,
        setIsEditing,
        expenses,
        setExpenses,
        expense,
        setExpense,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
