import styled from 'styled-components/native';

export const Layout = styled.View`
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  justify-content: flex-end;
  z-index: 1;
  padding-bottom: 20px;
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

export const Container = styled.View`
  margin: 20px;
  z-index: 3;
`;

export const WrapperTopContent = styled.View`
  background: #fff;
  border-radius: 20px;
  align-items: center;
`;

export const ContentTop = styled.View`
  padding: 20px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: #333;
  text-align: center;
`;

export const Description = styled.Text`
  font-size: 18px;
  color: #999;
  margin-top: 10px;
  text-align: center;
`;

export const ActionCancelButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  margin-top: 10px;
  border-top-width: 1px;
  border-top-color: #eee;
  width: 100%;
  padding: 16px;
  align-items: center;
`;

export const ActionConfirmButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  width: 100%;
  background: #fff;
  border-radius: 20px;
  padding: 16px;
  margin-top: 10px;
  align-items: center;
`;
