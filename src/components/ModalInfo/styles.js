import styled from 'styled-components/native';

export const Layout = styled.View`
  flex: 1;
  background: ${({theme}) => theme.colors.background};
  align-items: center;
  justify-content: center;
`;
