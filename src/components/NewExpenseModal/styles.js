import { KeyboardAvoidingView } from 'react-native';
import styled from 'styled-components/native';

export const HeaderView = styled.View`
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary};
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
