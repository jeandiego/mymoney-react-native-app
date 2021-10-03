import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 0 16px;
  background: ${({ theme }) => theme.colors.shape};
  margin-top: -25px;
  padding: 4px 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SearchView = styled.View`
  align-items: center;
  justify-content: center;
  width: 85%;
`;

export const ButtonView = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
