import styled from 'styled-components/native';

export const Layout = styled.View`
  flex-direction: column;
  background: ${({theme}) => theme.colors.background};
`;

export const Container = styled.View`
  flex-direction: column;
`;

export const Wrapper = styled.View`
  height: 100%;
  justify-content: center;
  flex-direction: column;
  padding-top: 120px;
  padding-left: 50px;
  padding-right: 50px;
`;

export const TilesWrapper = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
`;

export const TilesLimitingWrapper = styled.View`
  max-width: 50%;
  width: 100%;
`;

export const Tile = styled.View`
  background: ${({background}) => background};
  padding: 20px;
  min-height: 60px;
  border-radius: 10px;
  width: 100%;
  margin-bottom: 15px;
`;

export const FlexContainer = styled.View`
  flex-direction: row;
  width: 100%;
  margin-top: 36px;
`;

export const DescriptionText = styled.Text`
  flex: 1;
  font-weight: 400;
  font-size: 18px;
  align-self: stretch;
`;

export const FlatList = styled.FlatList`
  padding-top: 10px;
  padding-right: 20px;
  padding-left: 20px;
`;
