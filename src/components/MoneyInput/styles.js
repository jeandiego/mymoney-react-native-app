import { Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TextInput`
  width: 100%;
  background-color: ${(p) => p.theme.colors[p.background] || 'transparent'};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(14)}px;
  padding: ${Platform.OS === 'ios' ? 15 : 10}px;
  padding-left: 0;
  border-bottom-color: ${(p) =>
    p.theme.colors[p.background] || p.isFocused
      ? p.theme.colors.primary
      : p.theme.colors.text};
  border-bottom-width: 3px;
`;
