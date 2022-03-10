import styled from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
