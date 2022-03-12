import styled from 'styled-components/native';

export const Layout = styled.View``;

export const Wrapper = styled.View`
  height: 100%;
  justify-content: space-between;
  flex-direction: column;
  padding-left: 50px;
  padding-right: 50px;
  background: ${({theme}) => theme.colors.background};
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
