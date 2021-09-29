import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${(p) =>
    p.theme.colors[p.background] || p.theme.colors.background};
  padding: 0 16px;
  padding-bottom: ${(p) => p.safeArea.bottom + 24 || 0}px;
  padding-top: ${(p) => p.safeArea.top + 24 || 0}px;
`;
