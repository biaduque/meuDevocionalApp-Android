import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

export const Layout = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  padding: 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BackIcon = styled(Feather).attrs({
  name: 'chevron-left',
  size: 32,
})`
  color: ${({theme}) => theme.colorsLeituraRapidaScreen.titleScreen};
`;

export const SearchBar = styled.TextInput.attrs(props => ({
  placeholderTextColor: '#999',
  autoCapitalize: 'none',
  autoCorrect: false,
  selectionColor: props.theme.colors.accent,
}))`
  flex: 1;
  font-size: 24px;
  margin-left: 10px;
  color: ${({theme}) => theme.colors.titlePrimary};
`;

export const BigWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
