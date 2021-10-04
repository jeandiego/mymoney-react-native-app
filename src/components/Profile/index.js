import React, { useContext, useRef } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Portal } from 'react-native-portalize';
import MoneyText from '../MoneyText';
import { ButtonView, Container } from './styles';
import MoneyContent from '../MoneyView/Content';
import { useAuth } from '~/hooks/auth';
import GlobeSvg from '~/assets/svgs/globe.svg';
import { GlobalContext } from '~/providers';
import LanguageModal from '../LanguageModal';

const Profile = () => {
  const insets = useSafeAreaInsets();
  const { language } = useContext(GlobalContext);
  const {
    user: { username },
  } = useAuth();

  const modalizeRef = useRef(null);

  const handleRegionLanguage = () => {
    modalizeRef?.current.open();
  };

  return (
    <Container safeArea={insets}>
      <MoneyContent
        flex={1}
        pHorizontal={16}
        justify="space-between"
        alignItem="center">
        <MoneyText color="shape" size={24} fontWeight="regular">
          Olá
          <MoneyText color="shape" size={24} fontWeight="bold">
            {` ${username}`}
          </MoneyText>
        </MoneyText>
        <MoneyContent>
          <ButtonView onPress={handleRegionLanguage}>
            <MoneyText size={12} fontWeight="bold" color="shape" pRight={8}>
              {language}
            </MoneyText>
            <GlobeSvg width={24} height={24} fill="white" />
          </ButtonView>
        </MoneyContent>
      </MoneyContent>
      <Portal>
        <LanguageModal modalRef={modalizeRef} />
      </Portal>
    </Container>
  );
};

export default Profile;
