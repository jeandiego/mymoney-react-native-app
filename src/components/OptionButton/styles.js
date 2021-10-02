import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  margin: 8px;
  flex-direction: row;
  align-items: center;
`;

export const IconView = styled.View`
  width: 48px;
  height: 48px;
  background: ${(p) =>
    p.isDelete ? p.theme.colors.negative_light : 'transparent'};
  align-items: center;
  justify-content: center;
`;
