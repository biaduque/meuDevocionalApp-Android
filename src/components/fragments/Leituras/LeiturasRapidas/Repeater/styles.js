import styled from 'styled-components/native';

export const WrapperLeitura = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  justify-content: space-between;
  margin-right: 10px;
  background-color: ${({background}) => background};
  padding: 20px;
  max-width: 300px;
  max-height: 200px;
  border-radius: 4px;
`;

export const Description = styled.Text`
  font-size: 18px;
  line-height: 32px;
  color: ${({theme}) => theme.colors.titleSecondary};
`;

export const FooterWrapper = styled.View`
  margin-top: 26px;
`;

export const Title = styled.Text`
  font-weight: 700;
  font-size: 20px;
  color: ${({theme}) => theme.colors.titlePrimary};
`;

export const RefBiblia = styled.Text`
  font-weight: 400;
  font-size: 14px;
  opacity: 0.5;
  color: ${({theme}) => theme.colors.titlePrimary};
`;
