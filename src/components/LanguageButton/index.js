import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from 'styled-components';
import MoneyText from '../MoneyText';
import { Container, IconView } from './styles';
import ArgentinaSvg from '~/assets/svgs/ar.svg';
import BrasilSvg from '~/assets/svgs/br.svg';

const LanguageButton = ({ type, onPress }) => {
  const {
    colors: { title, negative },
  } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <Container onPress={onPress}>
      <IconView>
        {type === 'BRAZIL' ? (
          <BrasilSvg width={28} height={28} fill={negative} />
        ) : (
          <ArgentinaSvg width={28} height={28} fill={title} />
        )}
      </IconView>
      <MoneyText pLeft={16} color="title">
        {t(`LANGUAGE.${type}`)}
      </MoneyText>
    </Container>
  );
};

export default LanguageButton;
