import styled from 'styled-components/native';

export const Layout = styled.View`
  flex: 1;
  flex-direction: column;
  background: ${({theme}) => theme.colors.background};
`;

export const Container = styled.View`
  flex-direction: column;
`;

export const FlatList = styled.FlatList`
  padding-top: 10px;
  padding-right: 20px;
  padding-left: 20px;
`;

export const FloatingButtonCreate = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 70px;
  height: 70px;
  border-radius: 500px;
  border: 1px solid ${({theme}) => theme.colors.accent};
  background: ${({theme}) => theme.createDevotionalModal.footerBackground};
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;
