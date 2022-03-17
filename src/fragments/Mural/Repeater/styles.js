import styled from 'styled-components/native';

export const Layout = styled.View`
  flex: 1;
  background: ${({backgroundColor}) => backgroundColor};
  align-items: center;
  justify-content: space-between;
  height: 280px;
  max-width: 50%;
  border-radius: 15px;
  margin-bottom: 10px;
  margin-left: 10px;
  padding: 10px;
`;

export const LayoutImageBackground = styled.ImageBackground.attrs({
  resizeMode: 'cover',
  borderRadius: 15,
})`
  flex: 1;
  background: #fff;
  border-radius: 15px;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  background-color: ${({background}) => background};
  padding: 10px;
  color: ${({color}) => color};
`;

export const CreatedAt = styled.Text`
  background-color: ${({background}) => background};
  color: ${({color}) => color};
  padding: 0 5px;
`;
