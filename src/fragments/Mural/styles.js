import styled from 'styled-components/native';

export const Layout = styled.View`
  flex: 1;
  background: ${({theme}) => theme.colors.background};
`;

export const Container = styled.View`
  flex-direction: column;
  padding-right: 20px;
  padding-left: 10px;
`;

export const ViewEmptyList = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  padding-top: 240px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.accent};
  margin-bottom: 10px;
  margin-top: 42px;
  text-align: center;
`;

export const Description = styled.Text`
  color: ${({theme}) => theme.colors.titlePrimary};
  font-size: 18px;
`;

export const Button = styled.TouchableOpacity`
  background: ${({theme}) => theme.colors.accent};
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  padding: 10px;
  margin-top: 52px;
  min-height: 48px;
  min-width: 200px;
`;

export const TextButton = styled.Text`
  color: ${({theme}) => theme.colors.background};
  font-size: 18px;
  font-weight: 500;
`;

export const FlatList = styled.FlatList`
  padding-top: 10px;
`;
