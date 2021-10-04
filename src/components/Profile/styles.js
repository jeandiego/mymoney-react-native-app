import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const ButtonView = styled.TouchableOpacity`
  padding: 12px;
  background: ${({ theme }) => theme.colors.opacity};
  margin-left: 8px;
  flex-direction: row;
  align-items: center;
`;
