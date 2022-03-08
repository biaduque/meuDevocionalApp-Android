import styled from "styled-components/native";

export const Layout = styled.View`
  flex: 1;
  flex-direction: row;
  max-height: 62px;
  background: #f5faf6;
`

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
`

export const Button = styled.TouchableOpacity`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: ${({color}) => color};
  margin-top: 5px;
`;

