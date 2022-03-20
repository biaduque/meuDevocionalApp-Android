import React, {useEffect, useRef, useState} from 'react';
import {
  ButtonOkWorship,
  Container,
  DraftContainer,
  DraftContainerImage,
  Form,
  MuralDraftVisualWrapper,
  PhotoIcon,
  ScrollView,
  TextButton,
  TextButtonCancel,
  TextButtonSave,
  TextContent,
  TextInputBorder,
  TextTitle,
  WrapperColorButtons,
  WrapperFooter,
  WrapperInputLabel,
  WrapperWorship,
} from './styles';
import {Alert, Text, TouchableOpacity, Vibration} from 'react-native';
import LocalRepositoryService from '../../../services/LocalRepositoryService';
import {useDispatch, useSelector} from 'react-redux';
import {setMural} from '../../../store/actions/mydevotionals.action';
import uuid from 'react-native-uuid';
import CustomRadioButton from '../../../components/CustomRadioButton';
import moment from 'moment';
import Utils from '../../../common/utils';
import ImagePicker from 'react-native-image-crop-picker';
import ModalWarningBackSheet from '../../../components/ModalWarningBack';

const CreateMural = ({route, navigation}) => {
  const utils = new Utils();
  const dispatch = useDispatch();
  const $app = useSelector(state => state.app);

  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [selectedColor, setSelectedColor] = useState('verde2');
  const [isVisibleWarningModal, setIsVisibleWarningModal] = useState(false);

  async function saveContent() {
    const repositoryService = new LocalRepositoryService();
    const data = {
      id: uuid.v4(),
      titulo: title,
      backgroundColor: selectedColor,
      backgroundImage: backgroundImage,
      createdAt: moment().format('DD/MM/YYYY HH:mm:ss'),
    };

    const ret = await repositoryService.set(
      repositoryService.MURAL_LIST_KEY,
      data,
      true,
    );

    dispatch(setMural(ret));

    Alert.alert('Motivo de gratidão criado', 'Dados salvos com sucesso');
    const DURATION = 100;

    Vibration.vibrate(DURATION);
    handleClose();
  }

  const parseColors = () => {
    return utils.transformDataColor(selectedColor, $app.theme);
  };

  const canGoBack = () => {
    navigation.goBack();
  };

  const colorsRadioButtons = () => {
    const colors = Object.entries($app.theme.devotionalColors).map(color => {
      const [key, value] = color;
      return {
        label: key,
        value: value,
      };
    });

    return colors;
  };

  async function getImageCamera() {
    const ret = await ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    });
    setImage(ret.path);
    setBackgroundImage(ret.path);
  }

  const handleClose = () => {
    navigation.goBack();
  };

  const handleBackScreen = () => {
    handleOpenWarningModal();
  };

  function handleOpenWarningModal() {
    setIsVisibleWarningModal(true);
  }

  function handleCloseWarningModal() {
    setIsVisibleWarningModal(false);
  }

  return (
    <Container>
      <ModalWarningBackSheet
        title={'Tem certeza que deseja descartar este item?'}
        description={'Se sair, as informações não serão salvas.'}
        onPress={canGoBack}
        handleClose={handleCloseWarningModal}
        open={isVisibleWarningModal}
        titleCancel={'Ignorar alterações'}
        titleConfirm={'Continuar Editando'}
      />
      <ScrollView>
        <Form>
          <TextTitle>Meu motivo</TextTitle>
          <WrapperWorship>
            <WrapperInputLabel>
              <TextInputBorder
                placeholder={'Meu motivo de gratidão...'}
                value={title}
                onChangeText={setTitle}
                returnKeyType={'next'}
              />
            </WrapperInputLabel>

            <ButtonOkWorship>
              <TextButton>OK</TextButton>
            </ButtonOkWorship>
          </WrapperWorship>

          <TextTitle>Cor</TextTitle>
          <WrapperColorButtons>
            <CustomRadioButton
              data={colorsRadioButtons()}
              onSelect={setSelectedColor}
            />
          </WrapperColorButtons>
        </Form>

        <MuralDraftVisualWrapper>
          <PhotoIcon onPress={() => getImageCamera()} />

          {image != null ? (
            <DraftContainerImage source={{uri: image}}>
              <TextContent
                background={parseColors().background}
                color={parseColors().titulo}>
                {title === '' ? 'Seu motivo aqui' : title}
              </TextContent>
            </DraftContainerImage>
          ) : (
            <DraftContainer background={parseColors().background}>
              <TextContent
                background={parseColors().background}
                color={parseColors().titulo}>
                {title === '' ? 'Seu motivo aqui' : title}
              </TextContent>
            </DraftContainer>
          )}
        </MuralDraftVisualWrapper>
      </ScrollView>

      <WrapperFooter>
        <TouchableOpacity
          onPress={() => handleBackScreen()}
          style={{
            width: '50%',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TextButtonCancel>Cancelar</TextButtonCancel>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => saveContent()}
          style={{
            width: '50%',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TextButtonSave>Salvar</TextButtonSave>
        </TouchableOpacity>
      </WrapperFooter>
    </Container>
  );
};

export default CreateMural;
