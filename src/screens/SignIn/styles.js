import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-top: ${(p) => p.safeArea.top}px;
`;

export const HeaderView = styled(LinearGradient).attrs((p) => ({
  colors: [p.theme.colors.gradient01, p.theme.colors.gradient02],
  start: { x: 0, y: 0.5 },
  end: { x: 1.5, y: 0 },
}))`
  width: 100%;
  margin-top: ${(p) => -p.safeArea.top}px;
  padding: 0 16px;
  padding-top: 56px;
  padding-bottom: 24px;
  flex-direction: column;
`;

export const ContentView = styled.View``;

export const FooterView = styled.View`
  background: ${({ theme }) => theme.colors.card_background};
  height: 20%;
  padding: 0 16px;
  align-items: flex-end;
  justify-content: flex-end;
  padding-bottom: ${(p) => p.safeArea.bottom}px;
`;
