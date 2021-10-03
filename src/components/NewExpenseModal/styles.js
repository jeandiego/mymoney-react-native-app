import { KeyboardAvoidingView, Platform } from 'react-native';
import CurrencyInput from 'react-native-currency-input';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import { fonts } from '~/global/styles/fonts';

export const HeaderView = styled(LinearGradient).attrs((p) => ({
  colors: [p.theme.colors.gradient01, p.theme.colors.gradient02],
  start: { x: 0, y: 0.5 },
  end: { x: 1.5, y: 0 },
}))`
  justify-content: center;
  align-items: center;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const HeaderWrapper = styled.View`
  padding: 16px;
  width: 100%;
  align-items: center;
`;

export const ContentView = styled.View`
  padding: 16px;
  flex: 1;
  justify-content: space-between;
`;

export const InputView = styled.View`
  padding: 8px 0;
`;
export const FooterView = styled.View`
  justify-content: flex-end;
  padding: 16px 0;
`;

export const ContentWrapper = styled(KeyboardAvoidingView)``;

export const CurrencyInputMoney = styled(CurrencyInput).attrs((p) => ({
  placeholderTextColor: p.theme.colors[p.placeColor] || p.theme.colors.opacity,
}))`
  width: 100%;
  background-color: ${(p) => p.theme.colors[p.background] || 'transparent'};
  color: ${(p) => p.theme.colors[p.color] || p.theme.colors.title};
  padding: ${Platform.OS === 'ios' ? 12 : 10}px;
  padding-left: 0;
  text-align: ${(p) => (p.alignText ? p.alignText : 'left')};
  font-family: ${(p) => fonts[p.weight] || 'Poppins-Regular'};
  font-size: ${(p) => p.size || 16}px;
`;

export const DateButton = styled.TouchableOpacity`
  padding: 15px;
  padding-left: 0px;
  border-bottom-width: 3px;
  border-bottom-color: ${({ theme }) => theme.colors.opacity};
`;
