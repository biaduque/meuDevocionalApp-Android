import styled from 'styled-components/native';

export const Layout = styled.View``;

export const TitleScreen = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.titlePrimary};
  padding-left: 20px;
`;

export const FlatList = styled.FlatList`
  margin-top: 20px;
  padding-left: 20px;
`;
