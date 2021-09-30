import { useNavigation } from '@react-navigation/native';
import React from 'react';
import StartView from './view';

const Start = () => {
  const navigation = useNavigation();

  const handleGoToSignIn = () => {
    navigation.navigate('SignIn');
  };

  return <StartView handleGoToSignIn={handleGoToSignIn} />;
};

export default Start;
