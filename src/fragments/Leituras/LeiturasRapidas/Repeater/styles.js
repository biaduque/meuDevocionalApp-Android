import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {ChevronRight} from 'react-native-iconly';

export const WrapperLeitura = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  justify-content: space-between;
  margin-right: 10px;
  background-color: ${({background}) => background};
  padding: 20px;
  max-width: 300px;
  min-width: 300px;
  max-height: 200px;
  border-radius: 4px;
`;

const widthScreen = Dimensions.get('window').width;
export const Description = styled.Text`
  font-size: ${widthScreen > 415 ? '18px' : '16px'};
  line-height: ${widthScreen > 415 ? '26px' : '20px'};
  color: ${({theme}) => theme.colors.accent};
`;

export const FooterWrapper = styled.View`
  margin-top: 26px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerTitle = styled.View`
  //width: 50%;
`;

export const RightIcon = styled(ChevronRight)`
  color: ${({theme}) => theme.colors.accent};
`;

export const Title = styled.Text`
  font-weight: 700;
  font-size: 20px;
  color: ${({theme}) => theme.colors.accent};
`;

export const RefBiblia = styled.Text`
  font-weight: 400;
  font-size: 14px;
  opacity: 0.5;
  color: ${({theme}) => theme.colors.accent};
`;
