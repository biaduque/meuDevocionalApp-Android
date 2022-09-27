import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

export const Layout = styled.View`
  flex: 1;
  flex-direction: row;
  max-height: 62px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const BackdropBackground = styled.View`
  background: ${({theme}) => theme.colors.background};
  width: 100%;
  padding: 20px;
  min-height: 62px;
  opacity: 0.9;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 24px;
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const widthScreen = Dimensions.get('window').width;
export const Text = styled.Text`
  color: ${({color}) => color};
  font-size: ${widthScreen > 415 ? '12px' : '09px'};
  margin-top: 5px;
`;
