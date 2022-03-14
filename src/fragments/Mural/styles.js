import styled from 'styled-components/native';

export const Layout = styled.View`
  flex: 1;
  background: ${({theme}) => theme.colors.background};
`;

export const Container = styled.View`
  flex-direction: column;
  padding-right: 20px;
  padding-left: 10px;
`;

export const FlatList = styled.FlatList`
  padding-top: 10px;
`;
