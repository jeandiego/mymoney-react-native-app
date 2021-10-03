import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import TouchableShadow from '../TouchableShadow';

export const Container = styled(TouchableShadow)`
  width: 100%;
  padding-left: ${(p) => p.pLeft || p.pHorizontal || 8}px;
  padding-right: ${(p) => p.pRight || p.pHorizontal || 8}px;
  padding-bottom: ${(p) => p.pBottom || p.pVertical || 8}px;
  padding-top: ${(p) => p.pTop || p.pVertical || 8}px;
  align-items: ${(p) => p.alignItem || 'center'};
  justify-content: ${(p) => p.justify || 'center'};
  background: ${(p) =>
    p.disabled ? p.theme.colors.disabled : p.theme.colors[p.background]};
`;

export const GradientContainer = styled(LinearGradient).attrs((p) => ({
  colors: p.disabled
    ? [p.theme.colors.disabled, p.theme.colors.disabled]
    : [p.theme.colors.gradient01, p.theme.colors.gradient02],
  start: { x: 0, y: 0.5 },
  end: { x: 1.5, y: 0 },
}))`
  width: 100%;
  padding-left: ${(p) => p.pLeft || p.pHorizontal || 8}px;
  padding-right: ${(p) => p.pRight || p.pHorizontal || 8}px;
  padding-bottom: ${(p) => p.pBottom || p.pVertical || 8}px;
  padding-top: ${(p) => p.pTop || p.pVertical || 8}px;
  align-items: ${(p) => p.alignItem || 'center'};
  justify-content: ${(p) => p.justify || 'center'};
`;
