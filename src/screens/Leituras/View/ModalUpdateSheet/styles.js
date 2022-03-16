import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 20px 10px;
  z-index: 3;
`;

export const WrapperTopContent = styled.View`
  background: ${({theme}) => theme.colors.background};
  border-radius: 20px;
  align-items: center;
`;

export const ContentTop = styled.View`
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  color: ${({theme}) => theme.colors.titlePrimary};
`;

export const Description = styled.Text`
  font-size: 18px;
  color: #999;
  margin-top: 10px;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
`;

export const ActionCancelButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  padding: 16px;
  align-items: center;
  width: 45%;
`;

export const Separator = styled.View`
  height: 20px;
  width: 2px;
  background: ${({theme}) => theme.createDevotionalModal.borderColor};
`;

export const ActionConfirmButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  width: 45%;
  border-radius: 20px;
  padding: 16px;
  align-items: center;
`;

export const TextConfirm = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: ${({theme}) => theme.createDevotionalModal.buttonSave};
`;

export const TextCancel = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: ${({theme}) => theme.createDevotionalModal.buttonCancel};
`;
