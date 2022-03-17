import styled from 'styled-components/native';

export const LayoutEmpty = styled.View`
  padding-top: 240px;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 260px;
  height: 150px;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-size: 24px;
  text-align: center;
  color: ${({theme}) => theme.colors.titlePrimary};
  margin-bottom: 10px;
`;

export const Description = styled.Text`
  font-size: 20px;
  text-align: center;
  color: ${({theme}) => theme.colors.accent};
  margin-bottom: 30px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.accent};
  border-radius: 10px;
  padding: 13px 10px;
  width: 100%;
  align-items: center;
  justify-content: center;
  max-width: 200px;
  margin-top: 20px;
`;

export const TextButton = styled.Text`
  font-size: 18px;
  color: ${({theme}) => (theme.name === 'light' ? '#fff' : '#000')};
  text-align: center;
`;
