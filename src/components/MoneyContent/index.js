import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 16px;
  text-align: ${(p) => p.align || 'left'};
  padding-left: ${(p) => p.pLeft || 0}px;
  justify-content: ${(p) => p.justify || 'flex-start'};
  align-items: ${(p) => p.alignItem || 'flex-start'};
  flex-direction: ${(p) => p.flexDir || 'row'};
`;

const MoneyContent = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default MoneyContent;
