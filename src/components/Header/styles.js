import styled from 'styled-components/native';

export const Layout = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: ${({theme}) => theme.colors.background};
`;

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
`;

export const TitleScreen = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.titlePrimary};
  margin-right: auto;
  padding: 20px;
`;
