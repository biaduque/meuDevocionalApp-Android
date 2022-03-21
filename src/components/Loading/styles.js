import styled from 'styled-components/native';

export const Loading = styled.ActivityIndicator.attrs(props => ({
  size: 'large',
  color: props.theme.colors.titlePrimary,
}))`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
