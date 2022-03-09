import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 10px 0;
`;

export const WrapperContent = styled.View``;

export const CustomScrollView = styled.ScrollView`
  background: ${({theme}) => theme.colors.background};
  flex: 1;
`;
