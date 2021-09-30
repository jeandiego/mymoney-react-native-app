import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  padding: 12px;
  background: ${(p) => p.theme.colors[p.background] || p.theme.colors.opacity};
`;

const ButtonHeader = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default ButtonHeader;
