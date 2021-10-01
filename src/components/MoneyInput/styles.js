import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { fonts } from '~/global/styles/fonts';

export const Container = styled.TextInput.attrs((p) => ({
  placeholderTextColor: p.theme.colors[p.placeColor] || p.theme.colors.opacity,
}))`
  width: 100%;
  background-color: ${(p) => p.theme.colors[p.background] || 'transparent'};
  color: ${(p) => p.theme.colors[p.color] || p.theme.colors.title};
  padding: ${Platform.OS === 'ios' ? 12 : 10}px;
  padding-left: 0;
  text-align: ${(p) => (p.alignText ? p.alignText : 'left')};
  border-bottom-color: ${(p) =>
    p.theme.colors[p.background] || p.isFocused
      ? p.theme.colors.primary
      : p.theme.colors.opacity};
  border-bottom-width: ${(p) => p.borderBottom || 3}px;
  font-family: ${(p) => fonts[p.weight] || 'Poppins-Regular'};
  font-size: ${(p) => p.size || 16}px;
`;
