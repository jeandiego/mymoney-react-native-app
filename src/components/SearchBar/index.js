import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useTranslation } from 'react-i18next';
import MoneyInput from '../MoneyInput';
import SearchSvg from '~/assets/svgs/search.svg';

import { Container, SearchView, ButtonView } from './styles';

const SearchBar = () => {
  const { colors } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <Container>
      <SearchView>
        <MoneyInput
          placeholder={t('RELEASE.SEARCH_PLACEHOLDER')}
          keyboardType="web-search"
        />
      </SearchView>
      <ButtonView>
        <SearchSvg width={24} height={24} fill={colors.primary} />
      </ButtonView>
    </Container>
  );
};

export default SearchBar;
