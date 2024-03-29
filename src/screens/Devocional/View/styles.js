import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

export const Layout = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  position: relative;
  padding: 0 5px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 15px 15px;
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

export const ShareIcon = styled(Feather).attrs({
  name: 'share-2',
  size: 24,
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
  font-size: 36px;
  color: ${({color}) => color};
  font-weight: 500;
  margin-top: 10px;
`;

export const BaseBiblica = styled.Text`
  font-size: 20px;
  color: ${({theme}) => theme.colorsLeituraRapidaScreen.text};
  font-weight: 300;
  margin-top: 10px;
  opacity: 0.8;
`;

export const Text = styled.Text`
  font-size: 20px;
  color: ${({theme}) => theme.colorsLeituraRapidaScreen.text};
  font-weight: 400;
  margin-top: 10px;
`;

export const Footer = styled.View``;

export const TagsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: -40px;
  padding: 0 20px;
  width: 100%;
  margin-bottom: 30px;
`;

export const Tag = styled.Text`
  padding: 5px 10px;
  background: ${({color}) => color};
  color: #000;
  width: 30%;
  border-radius: 4px;
  text-align: center;
  opacity: 0.7;
`;

export const BackdropBackground = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: ${({theme}) => theme.colors.background};
  z-index: -1;
`;
