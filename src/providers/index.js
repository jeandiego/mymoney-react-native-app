import React, { createContext, useState } from 'react';

export const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [refresh, setRefresh] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        expenses,
        setExpenses,
        refresh,
        setRefresh,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
