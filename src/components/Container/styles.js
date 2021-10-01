import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${(p) =>
    p.theme.colors[p.background] || p.theme.colors.background};
  padding-left: ${(p) => p.pLeft || p.pHorizontal || 0}px;
  padding-right: ${(p) => p.pRight || p.pHorizontal || 0}px;
  padding-bottom: ${(p) => p.pBottom || p.pVertical || 0}px;
  padding-top: ${(p) => p.safeArea.top || 0}px;
`;
