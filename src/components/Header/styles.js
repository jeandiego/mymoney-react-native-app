import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: ${RFPercentage(34)}px;
  background-color: ${({ theme }) => theme.colors.primary};
`;
