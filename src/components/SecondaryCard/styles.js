import styled from 'styled-components/native';

export const ExpenseCard = styled.TouchableOpacity`
  flex: 1;
  background: ${({ theme }) => theme.colors.shape};
  padding: 16px;
  margin-bottom: 8px;
`;

export const TypeBar = styled.View`
  position: absolute;
  height: 80%;
  top: 33%;
  width: 4px;
  background: ${({ theme }) => theme.colors.negative};
`;
