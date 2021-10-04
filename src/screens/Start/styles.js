import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const Container = styled(LinearGradient).attrs((p) => ({
  colors: [p.theme.colors.gradient01, p.theme.colors.gradient02],
  start: { x: 0, y: 0.5 },
  end: { x: 1.5, y: 0 },
}))`
  flex: 1;
`;

export const HeaderView = styled.View`
  width: 100%;
  height: 70%;
`;

export const FooterView = styled.View`
  width: 100%;
  height: 30%;
  background: ${({ theme }) => theme.colors.shape};
`;

export const AbsoluteView = styled.TouchableOpacity`
  position: absolute;
  top: ${(p) => p.safeArea.top}px;
  right: 16px;
  z-index: 1;
  background: ${(p) => p.theme.colors.opacity};
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
