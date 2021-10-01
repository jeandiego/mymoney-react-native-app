import React from 'react';
import styled from 'styled-components/native';

export const FooterContainer = styled.View`
  ${(p) => (p.flex ? 'flex:1' : null)}
  width: ${(p) => p.width || null}%;
  height: ${(p) => p.height || null}%;
  background-color: ${(p) => p.theme.colors[p.background] || 'transparent'};
  justify-content: ${(p) => p.justify || 'flex-start'};
  align-items: ${(p) => p.alignItem || 'flex-start'};
  flex-direction: ${(p) => p.flexDir || 'row'};
  padding-left: ${(p) => p.pLeft || p.pHorizontal || 0}px;
  padding-right: ${(p) => p.pRight || p.pHorizontal || 0}px;
  padding-bottom: ${(p) => p.pBottom || p.pVertical || 0}px;
  padding-top: ${(p) => p.pTop || p.pVertical || 0}px;
  margin-top: ${(p) => p.mTop || 0}px;
`;

const MoneyFooter = ({ children, ...rest }) => {
  return <FooterContainer {...rest}>{children}</FooterContainer>;
};

export default MoneyFooter;
