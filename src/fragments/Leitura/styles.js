import styled from 'styled-components/native';
import {ScrollViewProps} from 'react-native';

export const Layout = styled.View`
  flex: 1;
  background: ${({theme}) => theme.colors.background};
`;
export const Container = styled.View`
  padding: 10px 0;
`;

export const WrapperContent = styled.View``;

export const CustomScrollView = styled.ScrollView`
  flex: 1;
  padding-top: 130px;
`;
