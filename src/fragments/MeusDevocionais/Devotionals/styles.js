import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const baseWidth = 375;
const baseHeight = 667;

const scaleWidth = width / baseWidth;
const scaleHeight = height / baseHeight;
const scale = Math.min(scaleWidth, scaleHeight);

const scaledSize = size => Math.ceil(size * scale);

export const Layout = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  padding: 24px 24px;
  flex-direction: row;
  align-items: center;
  background: ${({background}) => (background ? background : '#fff')};
  border-radius: 15px;
  margin-bottom: 10px;
`;

export const Container = styled.View`
  align-items: flex-start;
  flex-direction: column;
  flex-shrink: 1;
  margin-left: 10px;
`;

export const FlexContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 130px;
  height: 130px;
`;

export const DateCreatedAt = styled.Text`
  font-size: 16px;
  margin-bottom: 20px;
  opacity: 0.6;
  font-weight: bold;
  color: ${({color}) => color};
`;

export const Title = styled.Text`
  font-size: ${scaledSize(25)}px;
  max-width: 200px;
  font-weight: bold;
  color: ${({color}) => color};
`;

export const BaseBiblica = styled.Text`
  font-size: 18px;
  color: ${({color}) => color};
`;

export const TagsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  width: 100%;
`;

export const Tag = styled.Text`
  padding: 5px 10px;
  background: #c0b890;
  color: #fff;
  width: 30%;
  border-radius: 4px;
  text-transform: capitalize;
  text-align: center;
`;
