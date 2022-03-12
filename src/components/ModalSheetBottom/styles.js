import styled from 'styled-components/native';

export const Layout = styled.View`
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  justify-content: flex-end;
  z-index: 1;
`;

export const Backdrop = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  flex: 1;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 2;
`;
