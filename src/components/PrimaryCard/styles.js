import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  flex: 1;
  margin: 8px;
  padding: 24px 16px;
  background: ${({ theme }) => theme.colors.shape};
`;
