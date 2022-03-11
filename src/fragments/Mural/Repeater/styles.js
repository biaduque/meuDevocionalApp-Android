import styled from 'styled-components/native';

export const Layout = styled.View`
  flex: 1;
  background: ${({backgroundColor}) => backgroundColor};
  align-items: center;
  justify-content: space-between;
  height: 280px;
  border-radius: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  padding: 10px;
`;

export const LayoutImageBackground = styled.ImageBackground`
  flex: 1;
  background: #ecba7d;
  align-items: center;
  justify-content: space-between;
  height: 280px;
  border-radius: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  padding: 10px;
`;

export const Title = styled.Text`
  font-size: 26px;
  font-weight: 700;
  text-align: center;
`;
