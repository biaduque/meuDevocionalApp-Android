import styled from 'styled-components/native';

export const Layout = styled.View`
  flex-direction: column;
  background: ${({theme}) => theme.colors.background};
`;

export const Container = styled.View`
  flex-direction: column;
`;

export const FlatList = styled.FlatList`
  padding-top: 10px;
  padding-right: 20px;
  padding-left: 20px;
`;
