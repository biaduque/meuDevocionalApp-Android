import styled from 'styled-components/native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

export const Container = styled.View`
  flex: 1;
  padding-top: 28px;
  background-color: ${({theme}) => theme.colors.background};
`;

export const ScrollView = styled.ScrollView`
  padding-left: 20px;
  padding-right: 20px;
`;

export const TransparentButton = styled.TouchableOpacity``;

export const TextButtonSave = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: ${({theme}) => theme.createDevotionalModal.buttonSave};
`;

export const TextButtonCancel = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: ${({theme}) => theme.createDevotionalModal.buttonCancel};
`;

export const TextTitle = styled.Text`
  font-size: 26px;
  font-weight: 700;
  color: ${({theme}) => theme.colors.titlePrimary};
`;

export const WrapperColorButtons = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const CircleColorButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 500px;
  background-color: ${({background}) => background};
  justify-content: center;
  align-items: center;
`;

export const Form = styled.View`
  margin-top: 26px;
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: '#ccc',
  returnKeyType: 'next',
})`
  font-size: 16px;
  font-weight: 400;
  color: ${({theme}) => theme.colors.titlePrimary};
  margin-bottom: 10px;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.createDevotionalModal.borderColor};
`;

export const WrapperWorship = styled.View`
  flex-direction: row;
  margin-top: 20px;
  justify-content: space-between;
  width: 100%;
`;

export const WrapperInputLabel = styled.View`
  flex-direction: column;
  max-width: 75%;
  width: 100%;
`;

export const TextInputBorder = styled.TextInput.attrs({
  placeholderTextColor: '#ccc',
})`
  font-size: 16px;
  font-weight: 400;
  color: ${({theme}) => theme.colors.titlePrimary};
  margin-bottom: 10px;
  border: 1px solid ${({theme}) => theme.createDevotionalModal.borderColor}
  padding: 7px 16px;
`;

export const ButtonOkWorship = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.accent};
  border-radius: 4px;
  height: 45px;
  align-items: center;
  justify-content: center;
  width: 20%;
`;

export const MuralDraftVisualWrapper = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DraftContainerImage = styled.ImageBackground`
  border-radius: 10px;
  padding: 20px;
  min-height: 350px;
  width: 300px;
  margin-top: 36px;
  justify-content: center;
  align-items: center;
`;

export const DraftContainer = styled.View`
  background: ${({background}) => background};
  border-radius: 10px;
  padding: 20px;
  min-height: 350px;
  width: 300px;
  margin-top: 36px;
  justify-content: center;
  align-items: center;
`;

export const TextContent = styled.Text`
  color: ${({color}) => color};
  background: ${({background}) => background};
  text-align: center;
  font-size: 26px;
  padding: 0 7px;
  width: 100%;
`;

export const PhotoIcon = styled(EvilIcons).attrs({
  name: 'camera',
  size: 38,
})`
  color: ${({theme}) => theme.colors.accent};
  margin-top: 28px;
`;

export const WrapperFooter = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 62px;
  //margin-bottom: 26px;
  background: ${({theme}) => theme.createDevotionalModal.footerBackground};
`;
