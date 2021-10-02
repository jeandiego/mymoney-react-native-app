import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from 'styled-components';
import MoneyText from '../MoneyText';
import DeleteSvg from '~/assets/svgs/trash-alt.svg';
import EditSvg from '~/assets/svgs/edit.svg';

import { Container, IconView } from './styles';

const OptionButton = ({ type, onPress }) => {
  const {
    colors: { title, negative },
  } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <Container onPress={onPress}>
      <IconView isDelete={type === 'DELETE'}>
        {type === 'DELETE' ? (
          <DeleteSvg width={24} height={24} fill={negative} />
        ) : (
          <EditSvg width={24} height={24} fill={title} />
        )}
      </IconView>
      <MoneyText pLeft={16} color={type === 'DELETE' ? 'negative' : 'title'}>
        {t(`OPTIONS.${type}`)}
      </MoneyText>
    </Container>
  );
};

export default OptionButton;
