import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import { useTranslation } from 'react-i18next';
import LogoSvg from '~/assets/svgs/bill.svg';
import MoneyText from '~/components/MoneyText';
import MoneyContent from '~/components/MoneyView/Content';
import MoneyButton from '~/components/MoneyButton';
import GlobalContainer from '~/components/Container';

const StartView = ({ handleGoToSignIn }) => {
  const { t } = useTranslation();

  return (
    <GlobalContainer background="primary">
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

      <MoneyContent
        flexDir="column"
        justify="space-between"
        pVertical={48}
        pHorizontal={16}
        alignItem="center"
        flex={1}>
        <MoneyText size={RFValue(16)} color="shape" align="center">
          {t('SIGNIN.INSTRUCTIONS')}
        </MoneyText>

        <MoneyButton
          background="shape"
          size={RFValue(18)}
          pVertical={16}
          fontWeight="medium"
          color="primary"
          onPress={handleGoToSignIn}>
          {t('WELCOME.BUTTON_START')}
        </MoneyButton>
      </MoneyContent>
    </GlobalContainer>
  );
};

export default StartView;
