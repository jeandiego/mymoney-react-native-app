import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MoneyText from '../MoneyText';
import MenuSvg from '~/assets/svgs/bars.svg';
import { ButtonView, Container } from './styles';
import MoneyContent from '../MoneyView/Content';
import { useAuth } from '~/hooks/auth';

const Profile = () => {
  const insets = useSafeAreaInsets();
  const {
    user: { username },
  } = useAuth();

  return (
    <Container safeArea={insets}>
      <MoneyContent pHorizontal={16} justify="space-between" alignItem="center">
        <MoneyText color="shape" size={24} fontWeight="regular">
          Olá
          <MoneyText color="shape" size={24} fontWeight="bold">
            {` ${username}`}
          </MoneyText>
        </MoneyText>
        <ButtonView>
          <MenuSvg width={24} height={24} fill="white" />
        </ButtonView>
      </MoneyContent>
    </Container>
  );
};

export default Profile;
