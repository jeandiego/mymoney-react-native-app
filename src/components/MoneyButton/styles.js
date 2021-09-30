import styled from 'styled-components/native';
import TouchableShadow from '../TouchableShadow';

export const Container = styled(TouchableShadow)`
  width: 100%;
  /* height: ${(p) => p.height || 52}px; */
  padding-left: ${(p) => p.pLeft || p.pHorizontal || 8}px;
  padding-right: ${(p) => p.pRight || p.pHorizontal || 8}px;
  padding-bottom: ${(p) => p.pBottom || p.pVertical || 8}px;
  padding-top: ${(p) => p.pTop || p.pVertical || 8}px;
  align-items: ${(p) => p.alignItem || 'center'};
  justify-content: ${(p) => p.justify || 'center'};
  background-color: ${(p) => p.theme.colors[p.background] || 'transparent'};
`;
