import React, { useContext, useRef } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LogoSvg from '~/assets/svgs/bill.svg';
import MoneyText from '~/components/MoneyText';
import MoneyContent from '~/components/MoneyView/Content';
import MoneyButton from '~/components/MoneyButton';
import { AbsoluteView, Container, FooterView, HeaderView } from './styles';
import LanguageModal from '~/components/LanguageModal';
import { GlobalContext } from '~/providers';
import GlobeSvg from '~/assets/svgs/globe.svg';

const StartView = ({ handleGoToSignIn }) => {
  const { language } = useContext(GlobalContext);

  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const modalizeRef = useRef(null);

  function handleSelectLanguage() {
    modalizeRef.current?.open();
  }

  return (
    <Container>
      <AbsoluteView safeArea={insets} onPress={handleSelectLanguage}>
        <MoneyText size={12} fontWeight="bold" color="shape" pRight={8}>
          {language}
        </MoneyText>
        <GlobeSvg width={24} height={24} fill="white" />
      </AbsoluteView>
      <HeaderView>
        <MoneyContent
          pHorizontal={16}
          justify="space-between"
          flexDir="column"
          alignItem="center"
          flex={1}>
          <MoneyContent
            alignItem="center"
            justify="center"
            flexDir="column"
            mTop={RFValue(56)}
            flex={1}>
            <LogoSvg width={RFValue(120)} height={RFValue(68)} fill="#fff" />

            <MoneyText
              size={RFValue(28)}
              fontWeight="medium"
              color="shape"
              align="center"
              pTop={45}>
              {t('SIGNIN.DESCRIPTION')}
            </MoneyText>
          </MoneyContent>
        </MoneyContent>
      </HeaderView>
      <FooterView>
        <MoneyContent
          flexDir="column"
          justify="space-between"
          pVertical={48}
          pHorizontal={16}
          alignItem="center"
          flex={1}>
          <MoneyText
            size={RFValue(16)}
            color="gradient01"
            align="center"
            fontWeight="medium">
            {t('SIGNIN.INSTRUCTIONS')}
          </MoneyText>

          <MoneyButton
            gradient
            size={RFValue(18)}
            pVertical={16}
            fontWeight="medium"
            color="shape"
            onPress={handleGoToSignIn}>
            {t('WELCOME.BUTTON_START')}
          </MoneyButton>
        </MoneyContent>
      </FooterView>
      <LanguageModal modalRef={modalizeRef} />
    </Container>
  );
};

export default StartView;
