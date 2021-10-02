import styled from 'styled-components/native';

export const HeaderView = styled.View`
  justify-content: center;
  align-items: center;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  padding: 12px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.opacity};
`;

export const ContentView = styled.View`
  padding: 8px 16px;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;
