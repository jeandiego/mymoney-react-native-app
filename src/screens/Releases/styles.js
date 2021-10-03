import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`;

export const HeaderView = styled(LinearGradient).attrs((p) => ({
  colors: [p.theme.colors.gradient01, p.theme.colors.gradient02],
  start: { x: 0, y: 0.5 },
  end: { x: 1.5, y: 0 },
}))`
  padding: 0 16px;
  padding-top: ${(p) => p.safeArea.top}px;
  padding-bottom: ${(p) => p.safeArea.bottom + 16}px;
`;
