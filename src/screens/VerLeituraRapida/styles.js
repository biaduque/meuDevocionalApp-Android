import styled from 'styled-components/native';

export const Layout = styled.ScrollView`
  flex: 1;
  background-color: #fff;
  padding: 10px;
  position: relative;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LeftWrapperHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TitleBackScreen = styled.Text`
  font-size: 20px;
  color: #000;
`;

export const TitleScreen = styled.Text`
  font-size: 22px;
  font-weight: 500;
  color: #000;
  margin-right: 20px;
`;

export const RightWrapperHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const WrapperText = styled.View`
  padding: 10px;
  padding-bottom: 150px;
`;

export const TitleSection = styled.Text`
  font-size: 28px;
  font-weight: 500;
  color: #5e6c61;
  margin-top: 24px;
`;

export const TextVersiculo = styled.Text`
  font-size: 20px;
  font-style: italic;
  color: #000;
  font-weight: 400;
  margin-top: 10px;
`;

export const Text = styled.Text`
  font-size: 20px;
  color: #000;
  font-weight: 400;
  margin-top: 10px;
`;
