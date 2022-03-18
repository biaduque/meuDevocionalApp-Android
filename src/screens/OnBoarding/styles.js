import styled from 'styled-components/native';

export const Layout = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 48px;
`;

export const TextButton = styled.Text`
  color: ${({theme}) => theme.colors.accent};
  font-size: 18px;
  font-weight: 600;
`;
