import styled from 'styled-components/native';
import {BlurView} from '@react-native-community/blur';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const Layout = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  position: relative;
`;

export const Header = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  height: 60px;
`;

export const BackdropBackgroundHeader = styled.View`
  background: ${({theme}) => theme.colors.background};
  opacity: 0.9;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;

  width: 100%;
  padding: 20px;
  height: 65px;
`;

export const ContainerHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  height: 60px;
`;

export const LeftWrapperHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TitleBackScreen = styled.Text`
  font-size: 20px;
  color: ${({theme}) => theme.colors.accent};
`;

export const TitleScreen = styled.Text`
  font-size: 22px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.accent};
  margin-right: 20px;
`;

export const RightWrapperHeader = styled.View`
  flex-direction: row;
  align-items: center;
  padding-right: 24px;
`;

export const BackIcon = styled(Feather).attrs({
  name: 'chevron-left',
  size: 32,
})`
  color: ${({theme}) => theme.colors.accent};
`;

export const EditIcon = styled(Feather).attrs({
  name: 'edit',
  size: 24,
})`
  color: ${({theme}) => theme.colors.accent};
`;

export const SaveIcon = styled(Feather).attrs({
  name: 'save',
  size: 24,
})`
  color: ${({theme}) => theme.colors.accent};
`;

export const ShareIcon = styled(Feather).attrs({
  name: 'share-2',
  size: 24,
})`
  color: ${({theme}) => theme.colors.accent};
  margin-left: 20px;
`;

export const UncheckIcon = styled(AntDesign).attrs({
  name: 'checkcircleo',
  size: 24,
})`
  color: ${({theme}) => theme.colors.accent};
  margin-right: 10px;
  margin-bottom: 10px;
`;

export const CheckedIcon = styled(AntDesign).attrs({
  name: 'checkcircle',
  size: 24,
})`
  color: ${({theme}) => theme.colors.accent};
  margin-right: 10px;
  margin-bottom: 10px;
`;

export const WrapperText = styled.View`
  padding: 20px;
  padding-top: 5px;
  margin-top: 62px;
`;

export const CustomizedContent = styled.View`
  padding-top: 5px;
  margin-top: -20px;
`;

export const MinhaAplicacaoWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const InputAplicacao = styled.TextInput.attrs({
  placeholderTextColor: '#ccc',
})`
  flex: 1;
  border-color: ${({theme}) => theme.createDevotionalModal.borderColor};
  border-width: 1px;
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 5px 10px;
  color: ${({theme}) => theme.colors.titlePrimary};
`;

export const TitleSection = styled.Text`
  font-size: 28px;
  font-weight: 500;
  color: ${({theme}) => theme.devotionalColors.verde2};
  margin-top: 24px;
`;

export const TextVersiculo = styled.Text`
  font-size: 20px;
  line-height: 26px;
  font-style: italic;
  color: ${({theme}) => theme.colorsLeituraRapidaScreen.text};
  font-weight: 300;
  margin-top: 10px;
`;

export const Text = styled.Text`
  font-size: 20px;
  line-height: 26px;
  color: ${({theme}) => theme.colorsLeituraRapidaScreen.text};
  font-weight: 400;
  margin-top: 10px;
`;

export const AnnotationsWrapper = styled.View`
  padding: 0 20px 160px 20px;
  margin-top: -40px;
`;

export const AnnotationsTextArea = styled.TextInput.attrs({
  placeholderTextColor: '#ccc',
  multiline: true,
  numberOfLines: 10,
  textAlignVertical: 'top',
})`
  width: 100%;
  color: ${({theme}) => theme.colors.titlePrimary};
  margin-top: 10px;
`;
