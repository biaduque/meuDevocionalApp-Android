import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

export const WorshipTimeWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0px 20px;
  margin-top: 20px;
  margin-bottom: 60px;
  height: 80px;
  width: 100%;
`;

export const CirclePlay = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  width: 50px;
  height: 50px;
  border-radius: 500px;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

export const ImagePlay = styled.Image`
  width: 60px;
  height: 60px;
  margin-top: 14px;
`;

export const ImageBackground = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 20px;
  right: 0;
  bottom: 0;
`;

export const PlayIcon = styled(Feather).attrs({
  name: 'play',
  size: 26,
  background: '#fff',
})`
  color: ${({theme}) => theme.colorsLeituraRapidaScreen.titleScreen};
`;
