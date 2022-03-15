import styled from 'styled-components/native';
import {StatusBar} from 'react-native';

export const Layout = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  width: 100%;
`;

export const Bar = styled(StatusBar).attrs(props => ({
  barStyle: props.theme.name === 'dark' ? 'light-content' : 'dark-content',
  backgroundColor: props.theme.colors.statusBarColor,
}))``;
