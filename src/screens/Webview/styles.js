import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

export const Layout = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 20px;
  flex-direction: row;
  align-items: center;
  background: ${({theme}) => theme.colors.background};
`;

export const BackIcon = styled(Feather).attrs({
  name: 'chevron-left',
  size: 32,
})`
  color: ${({theme}) => theme.colorsLeituraRapidaScreen.titleScreen};
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${({theme}) => theme.colors.titlePrimary};
  margin-left: 10px;
`;

export const WrapperBrowser = styled.View`
  flex: 1;
`;
