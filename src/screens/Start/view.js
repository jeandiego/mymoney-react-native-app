import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import { useTranslation } from 'react-i18next';
import LogoSvg from '~/assets/svgs/bill.svg';
import MoneyText from '~/components/MoneyText';
import MoneyContent from '~/components/MoneyView/Content';
import MoneyButton from '~/components/MoneyButton';
import { Container, FooterView, HeaderView } from './styles';

const StartView = ({ handleGoToSignIn }) => {
  const { t } = useTranslation();

  return (
    <Container>
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
    </Container>
  );
};

export default StartView;
