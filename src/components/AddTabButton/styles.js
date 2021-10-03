import LinearGradient from 'react-native-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity``;

export const GradientBg = styled(LinearGradient).attrs((p) => ({
  colors: p.disabled
    ? [p.theme.colors.disabled, p.theme.colors.disabled]
    : [p.theme.colors.gradient01, p.theme.colors.gradient02],
  start: { x: 0, y: 0.5 },
  end: { x: 1.5, y: 0 },
}))`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 30px;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  elevation: 6;
`;
