import styled from 'styled-components/native';

export const Layout = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  padding: 24px 24px;
  flex-direction: row;
  align-items: center;
  background: ${({background}) => (background ? background : '#fff')};
  border-radius: 20px;
  margin-bottom: 10px;
`;

export const Container = styled.View`
  align-items: flex-start;
  flex-direction: column;
  flex-shrink: 1;
  margin-left: 10px;
`;

export const Title = styled.Text`
  font-size: 32px;
  max-width: 200px;
  font-weight: bold;
  color: #000;
`;

export const DateTime = styled.Text`
  font-size: 18px;
  color: #999;
`;

export const TagsWrapper = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;

export const Tag = styled.Text`
  padding: 5px 10px;
  background: rgba(54, 54, 54, 0.5);
  color: #fff;
  border-radius: 10px;
  margin-right: 10px;
  text-transform: capitalize;
`;
