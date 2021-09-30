import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: ${(p) => p.safeArea.top}px;
  flex: 1;
  justify-content: space-between;
`;

export const ButtonView = styled.TouchableOpacity`
  padding: 12px;
  background: ${({ theme }) => theme.colors.opacity};
`;
