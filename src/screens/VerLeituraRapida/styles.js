import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

export const Layout = styled.ScrollView`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  position: relative;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px 0;
`;

export const LeftWrapperHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TitleBackScreen = styled.Text`
  font-size: 20px;
  color: ${({theme}) => theme.colors.titleSecondary};
`;

export const TitleScreen = styled.Text`
  font-size: 22px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.titlePrimary};
  margin-right: 20px;
`;

export const RightWrapperHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BackIcon = styled(Feather).attrs({
  name: 'chevron-left',
  size: 32,
})`
  color: ${({theme}) => theme.colors.iconColor};
`;
export const EditIcon = styled(Feather).attrs({
  name: 'edit',
  size: 24,
})`
  color: ${({theme}) => theme.colors.iconColor};
`;

export const ShareIcon = styled(EvilIcons).attrs({
  name: 'share-apple',
  size: 34,
})`
  color: ${({theme}) => theme.colors.iconColor};
  margin-left: 20px;
`;

export const WrapperText = styled.View`
  padding: 20px;
  padding-top: 5px;
  padding-bottom: 60px;
`;

export const TitleSection = styled.Text`
  font-size: 28px;
  font-weight: 500;
  color: ${({theme}) => theme.colorsLeituraRapidaScreen.titleSection};
  margin-top: 24px;
`;

export const TextVersiculo = styled.Text`
  font-size: 20px;
  font-style: italic;
  color: ${({theme}) => theme.colorsLeituraRapidaScreen.text};
  font-weight: 400;
  margin-top: 10px;
`;

export const Text = styled.Text`
  font-size: 20px;
  color: ${({theme}) => theme.colorsLeituraRapidaScreen.text};
  font-weight: 400;
  margin-top: 10px;
`;
