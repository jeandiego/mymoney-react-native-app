import React, { useRef } from 'react';
import { Host } from 'react-native-portalize';
import GlobalStyle from './global/styles';
import { Routes } from './routes';
import './configs/reactotron';
import '~/lang';
import { AuthProvider } from '~/hooks/auth';
import GlobalProvider from './providers';
import NewExpenseModal from './components/NewExpenseModal';

const App = () => {
  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef?.current.open();
  };

  return (
    <GlobalStyle>
      <GlobalProvider>
        <AuthProvider>
          <Host>
            <Routes openExpenseModal={onOpen} openOptionsModal={onOpen} />
            <NewExpenseModal modalRef={modalizeRef} />
          </Host>
        </AuthProvider>
      </GlobalProvider>
    </GlobalStyle>
  );
};

export default App;
