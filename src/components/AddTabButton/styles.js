import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  shadowColor: '#9C27B0',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 5,
})`
  background-color: ${({ theme }) => theme.colors.primary};
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 30px;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  elevation: 6;
`;
