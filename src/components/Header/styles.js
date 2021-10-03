import LinearGradient from 'react-native-linear-gradient';
import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(LinearGradient).attrs((p) => ({
  colors: [p.theme.colors.gradient01, p.theme.colors.gradient02],
  start: { x: 0, y: 0.5 },
  end: { x: 1.5, y: 0 },
}))`
  width: 100%;
  height: ${RFPercentage(24)}px;
`;
