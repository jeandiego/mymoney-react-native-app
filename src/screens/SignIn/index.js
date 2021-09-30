/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useAuth } from '~/hooks/auth';
import SignInView from './view';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const { signInWithEmail } = useAuth();

  async function handleSignInWithEmail() {
    try {
      await signInWithEmail(username, userEmail);
    } catch (error) {
      Alert.alert('Nao foi possível conectar com seu email');
    }
  }

  useEffect(() => {}, []);

  return (
    <SignInView
      username={username}
      userEmail={userEmail}
      setUserEmail={setUserEmail}
      setUsername={setUsername}
      onPress={handleSignInWithEmail}
    />
  );
};

export default SignIn;
