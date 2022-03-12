import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

export const Layout = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  position: relative;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px 15px;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  background: ${({theme}) => theme.colors.background};
  z-index: 1;
  height: 62px;
`;

export const LeftWrapperHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TitleBackScreen = styled.Text`
  font-size: 20px;
  color: ${({theme}) => theme.colorsLeituraRapidaScreen.titleScreen};
`;

export const TitleScreen = styled.Text`
  font-size: 22px;
  font-weight: 500;
  color: ${({theme}) => theme.colorsLeituraRapidaScreen.titleScreen};
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
  color: ${({theme}) => theme.colorsLeituraRapidaScreen.titleScreen};
`;

export const EditIcon = styled(Feather).attrs({
  name: 'edit',
  size: 24,
})`
  color: ${({theme}) => theme.colorsLeituraRapidaScreen.titleScreen};
`;

export const ShareIcon = styled(EvilIcons).attrs({
  name: 'share-apple',
  size: 34,
})`
  color: ${({theme}) => theme.colorsLeituraRapidaScreen.titleScreen};
  margin-left: 20px;
`;

export const WrapperText = styled.View`
  padding: 20px;
  padding-top: 5px;
  margin-top: 62px;
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

export const WorshipTimeWrapper = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  padding-top: 0px;
  padding-bottom: 0px;
  margin-top: 20px;
  margin-bottom: 60px;
  height: 80px;
`;

export const ImageBackground = styled.Image`
  width: 100%;
  height: 100%;
`;
