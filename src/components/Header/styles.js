import styled from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const Layout = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: ${({theme}) => theme.colors.background};
  padding: 20px;
`;

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
