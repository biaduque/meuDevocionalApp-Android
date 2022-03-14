import styled from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const Layout = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
`;

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  padding: 20px;
`;

export const BackdropBackground = styled.View`
  background: ${({theme}) => theme.colors.background};
  width: 100%;
  padding: 20px;
  min-height: 65px;
  opacity: 0.7;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const TitleScreen = styled.Text`
  font-size: 36px;
  font-weight: 400;
  color: ${({theme}) => theme.colors.titlePrimary};
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 100px;
  margin-top: 100px;
`;

export const InfoIcon = styled(AntDesign).attrs({
  name: 'infocirlceo',
  size: 24,
})`
  color: ${({theme}) => theme.colorsLeituraRapidaScreen.titleScreen};
`;
export const PlusIcon = styled(AntDesign).attrs({
  name: 'plus',
  size: 24,
})`
  color: ${({theme}) => theme.colorsLeituraRapidaScreen.titleScreen};
`;
