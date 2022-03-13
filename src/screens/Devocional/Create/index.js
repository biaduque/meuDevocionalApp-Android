import React, {useEffect, useRef, useState} from 'react';
import {
  ButtonOkWorship,
  CircleColorButton,
  Container,
  Form,
  LabelInfo,
  ScrollView,
  TextArea,
  TextButtonCancel,
  TextButtonSave,
  TextInput,
  TextInputBorder,
  TextTitle,
  WrapperColorButtons,
  WrapperFooter,
  WrapperInputLabel,
  WrapperReflexao,
  WrapperWorship,
} from './styles';
import {
  StatusBar,
  Text,
  TouchableOpacity,
  Alert,
  Vibration,
} from 'react-native';
import LocalRepositoryService from '../../../services/LocalRepositoryService';
import {useDispatch, useSelector} from 'react-redux';
import {setMyDevotionals} from '../../../store/actions/mydevotionals.action';
import uuid from 'react-native-uuid';
import CustomRadioButton from '../../../components/CustomRadioButton';

const CreateDevotionalScreen = ({route, navigation}) => {
  const {params} = route;

  const dispatch = useDispatch();
  const $app = useSelector(state => state.app);

  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  const input4 = useRef();
  const input5 = useRef();
  const input6 = useRef();
  const input7 = useRef();
  const input8 = useRef();
  const input9 = useRef();

  const [title, setTitle] = useState('');
  const [book, setBook] = useState('');
  const [chapter, setChapter] = useState('');
  const [versicle, setVersicle] = useState('');
  const [key1, setKey1] = useState('');
  const [key2, setKey2] = useState('');
  const [key3, setKey3] = useState('');
  const [music, setMusic] = useState('');
  const [description, setDescription] = useState('');
  const [selectedColor, setSelectedColor] = useState('verde1');

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

    const concatCapVerse = versicle !== '' ? `${chapter}:${versicle}` : chapter;

    const data = {
      id: uuid.v4(),
      titulo: title,
      baseBiblica: `${book} ${concatCapVerse}`,
      aplicacao1: key1,
      aplicacao2: key2,
      aplicacao3: key3,
      backgroundColor: selectedColor,
      backgroundImage: '',
      reflexao: description ? description : '',
      link: music === '' ? null : music,
      createdAt: new Date(),
    };

    const ret = await repositoryService.set(
      repositoryService.DEVOCIONAL_LIST_KEY,
      data,
      true,
    );

    dispatch(setMyDevotionals(ret));

    Alert.alert('Devocional Criado', 'Dados salvos com sucesso');
    const DURATION = 100;

    Vibration.vibrate(DURATION);
    handleBackScreen();
  }

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
        <TextTitle>Cor</TextTitle>
        <WrapperColorButtons>
          <CustomRadioButton
            data={colorsRadioButtons()}
            onSelect={setSelectedColor}
          />
        </WrapperColorButtons>

        <Form>
          <TextInput
            ref={input1}
            placeholder={'Título'}
            value={title}
            onChangeText={setTitle}
            autoFocus={true}
            onSubmitEditing={() => input2.current.focus()}
          />
          <TextInput
            ref={input2}
            placeholder={'Livro'}
            value={book}
            onChangeText={setBook}
            onSubmitEditing={() => input3.current.focus()}
          />
          <TextInput
            ref={input3}
            placeholder={'Capítulo'}
            value={chapter}
            onChangeText={setChapter}
            onSubmitEditing={() => input4.current.focus()}
          />
          <TextInput
            ref={input4}
            placeholder={'Versículo'}
            value={versicle}
            onChangeText={setVersicle}
            onSubmitEditing={() => input5.current.focus()}
          />
          <TextInput
            ref={input5}
            placeholder={'Palavra chave 1'}
            onSubmitEditing={() => input6.current.focus()}
            value={key1}
            onChangeText={setKey1}
          />
          <TextInput
            ref={input6}
            placeholder={'Palavra chave 2'}
            onSubmitEditing={() => input7.current.focus()}
            value={key2}
            onChangeText={setKey2}
          />
          <TextInput
            ref={input7}
            placeholder={'Palavra chave 3'}
            onSubmitEditing={() => input8.current.focus()}
            value={key3}
            onChangeText={setKey3}
          />
        </Form>

        <TextTitle style={{marginTop: 42}}>My worship time!</TextTitle>
        <WrapperWorship>
          <WrapperInputLabel>
            <TextInputBorder
              placeholder={'Insira um link de música...'}
              value={music}
              onChangeText={setMusic}
              ref={input8}
              returnKeyType={'next'}
              onSubmitEditing={() => input9.current.focus()}
            />
            <LabelInfo>
              Você pode inserir links de música do YouTube, SoundCloud, Apple
              Music e Spotify.
            </LabelInfo>
          </WrapperInputLabel>

          <ButtonOkWorship>
            <Text style={{fontSize: 20, color: '#333'}}>OK</Text>
          </ButtonOkWorship>
        </WrapperWorship>

        <WrapperReflexao>
          <TextTitle>Reflexão</TextTitle>
          <TextArea
            placeholder={'Comece a escrever...'}
            value={description}
            onChangeText={setDescription}
            ref={input9}
          />
        </WrapperReflexao>
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

export default CreateDevotionalScreen;
