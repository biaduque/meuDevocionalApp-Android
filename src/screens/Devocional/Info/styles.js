import styled from 'styled-components/native';

export const Layout = styled.View`
  background: ${({theme}) => theme.colors.background};
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

export const Wrapper = styled.View`
  flex-direction: column;
  max-width: 80%;
  width: 100%;
  margin: 0 auto;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
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
