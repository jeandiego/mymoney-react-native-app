import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RFValue } from 'react-native-responsive-fontsize';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import ButtonHeader from '~/components/ButtonHeader';
import MoneyButton from '~/components/MoneyButton';
import MoneyInput from '~/components/MoneyInput';
import MoneyText from '~/components/MoneyText';
import MoneyContent from '~/components/MoneyView/Content';
import ArrowSvg from '~/assets/svgs/arrow-left.svg';
import { Container, FooterView, HeaderView } from './styles';

const SignInView = ({
  setUsername,
  setUserEmail,
  username,
  userEmail,
  onPress,
}) => {
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [focus, setFocus] = useState({
    name: false,
    email: false,
  });

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <Container safeArea={insets}>
      <HeaderView safeArea={insets}>
        <ButtonHeader onPress={goBack}>
          <ArrowSvg width={24} height={24} fill="white" />
        </ButtonHeader>
        <MoneyContent flexDir="column" pTop={16}>
          <MoneyText
            color="shape"
            size={RFValue(24)}
            fontWeight="bold"
            pBottom={8}>
            {t('SIGNIN_WELCOME')}
          </MoneyText>
          <MoneyText size={RFValue(12)} color="shape">
            {t('SIGNIN_DESCRIPTION')}
          </MoneyText>
        </MoneyContent>
      </HeaderView>

      <MoneyContent
        flexDir="column"
        flex={1}
        pHorizontal={16}
        pVertical={24}
        background="card_background">
        <MoneyText size={14} color={focus.name ? 'primary' : 'text'}>
          {t('SIGNIN.USER_LABEL')}
        </MoneyText>
        <MoneyInput
          value={username}
          isFocused={focus.name}
          placeholder={t('SIGNIN.USER_PLACEHOLDER')}
          onFocus={() => setFocus({ ...focus, name: true })}
          onBlur={() => setFocus({ ...focus, name: false })}
          onChangeText={setUsername}
          autoCompleteType="name"
        />
        <MoneyText size={14} color={focus.email ? 'primary' : 'text'} pTop={36}>
          {t('SIGNIN.EMAIL_LABEL')}
        </MoneyText>
        <MoneyInput
          value={userEmail}
          isFocused={focus.email}
          placeholder={t('SIGNIN.EMAIL_PLACEHOLDER')}
          onFocus={() => setFocus({ ...focus, email: true })}
          onBlur={() => setFocus({ ...focus, email: false })}
          onChangeText={setUserEmail}
          autoCapitalize="none"
          autoCompleteType="email"
          keyboardType="email-address"
        />
      </MoneyContent>
      <FooterView safeArea={insets}>
        <MoneyButton
          disabled={!username && !userEmail}
          gradient
          background="primary"
          pVertical={16}
          color="shape"
          pBottom={8}
          size={RFValue(16)}
          fontWeight="medium"
          onPress={onPress}>
          {t('SIGNIN_BUTTON_REGISTER')}
        </MoneyButton>
      </FooterView>
    </Container>
  );
};

export default SignInView;
