import React, {useEffect, useRef, useState} from 'react';
import {
  ButtonOkWorship,
  Container,
  DraftContainer,
  Form,
  MuralDraftVisualWrapper,
  PhotoIcon,
  ScrollView,
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

const CreateMural = ({route, navigation}) => {
  const {params} = route;

  const utils = new Utils();
  const dispatch = useDispatch();
  const $app = useSelector(state => state.app);

  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [book, setBook] = useState('');
  const [chapter, setChapter] = useState('');
  const [selectedColor, setSelectedColor] = useState('verde2');

  useEffect(() => {
    if (params != null) {
      setTitle(params.titulo);
      setBook(params.refBiblica.split(' ')[0]);
      setChapter(params.refBiblica);
    }

    return () => {};
  }, [params]);

  const handleBackScreen = () => {
    navigation.goBack();
  };

  async function saveContent() {
    const repositoryService = new LocalRepositoryService();
    // se apagar a imagem do mural, o background fica da cor do bg do texto.

    const data = {
      id: uuid.v4(),
      titulo: title,
      backgroundColor: selectedColor,
      backgroundImage: image,
      createdAt: moment().format('DD/MM/YYYY'),
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
    handleBackScreen();
  }

  const parseColors = () => {
    return utils.transformDataColor(selectedColor, $app.theme);
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

  return (
    <Container>
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
              <Text style={{fontSize: 20, color: '#333'}}>OK</Text>
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
          <DraftContainer background={parseColors().background}>
            <TextContent color={parseColors().titulo}>{title}</TextContent>
          </DraftContainer>

          <PhotoIcon />
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
