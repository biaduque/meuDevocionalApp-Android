import React, {useEffect, useRef, useState} from 'react';
import {
  ButtonOkWorship,
  Container,
  Form,
  LabelInfo,
  ScrollView,
  TextArea,
  TextButtonCancel,
  TextButtonOk,
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
import {TouchableOpacity, Alert, Vibration, Keyboard} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import uuid from 'react-native-uuid';
import moment from 'moment';
import LocalRepositoryService from '../../../services/LocalRepositoryService';
import {setMyDevotionals} from '../../../store/actions/mydevotionals.action';
import CustomRadioButton from '../../../components/CustomRadioButton';
import ModalWarningBackSheet from '../../../components/ModalWarningBack';

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

  const [isVisibleWarningModal, setIsVisibleWarningModal] = useState(false);
  const [id, setId] = useState(null);
  const [title, setTitle] = useState('');
  const [book, setBook] = useState('');
  const [chapter, setChapter] = useState('');
  const [versicle, setVersicle] = useState('');
  const [key1, setKey1] = useState('');
  const [key2, setKey2] = useState('');
  const [key3, setKey3] = useState('');
  const [music, setMusic] = useState('');
  const [description, setDescription] = useState('');
  const [selectedColor, setSelectedColor] = useState('verde2');
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    if (params != null) {
      setId(params.id);
      setTitle(params.titulo);
      setUpdate(params.update);

      setMusic(params.musica || params.link);
      setDescription(params.desenvolvimento);

      setKey1(params.aplicacao1);
      setKey2(params.aplicacao2);
      setKey3(params.aplicacao3);

      setSelectedColor(props => {
        props = params.backgroundColor;
        return props;
      });

      if (params.refBiblica != null) {
        const livro = params.refBiblica.split(' ')[0];

        const assertCapVers = params.refBiblica.replace(/\w+\s+/g, '');
        const capVersWithoutSpaces = assertCapVers.replace(/\s+/g, '');

        const capitulo = capVersWithoutSpaces.split(':')[0];
        const versiculo = capVersWithoutSpaces.split(':')[1];

        setBook(livro);
        setChapter(capitulo);
        setVersicle(versiculo);
      } else {
        setBook(params.livro);
        setChapter(params.capitulo);
        setVersicle(params.versiculo);
      }
    }

    return () => {
      setBook('');
      setChapter('');
      setVersicle('');
      setKey1('');
      setKey2('');
      setKey3('');
      setMusic('');
      setDescription('');
      setSelectedColor('');
      setUpdate(false);
    };
  }, [params]);

  const canGoBack = () => {
    navigation.goBack();
  };

  const handleBackScreen = () => {
    Keyboard.dismiss();
    handleOpenWarningModal();
  };

  const handleCloseScreen = () => {
    Keyboard.dismiss();
    canGoBack();
  };

  function handleOpenWarningModal() {
    setIsVisibleWarningModal(true);
  }

  function handleCloseWarningModal() {
    setIsVisibleWarningModal(false);
  }

  async function saveContent() {
    const repositoryService = new LocalRepositoryService();

    let newId = id;
    if (id == null) {
      newId = uuid.v4();
    }

    const aplicacoes = {
      aplicacao1: key1 !== '' ? key1 : null,
      aplicacao2: key2 !== '' ? key2 : null,
      aplicacao3: key3 !== '' ? key3 : null,
    };

    const data = {
      id: newId,
      titulo: title,
      livro: book,
      capitulo: chapter,
      versiculo: versicle,
      ...aplicacoes,
      backgroundColor: selectedColor,
      backgroundImage: '',
      reflexao: description ? description : '',
      link: music === '' ? null : music,
      createdAt: moment().format('DD/MM/YYYY HH:mm:ss'),
    };

    let ret;

    if (update === true) {
      ret = await repositoryService.update(
        repositoryService.DEVOCIONAL_LIST_KEY,
        data,
        true,
      );
    } else {
      ret = await repositoryService.set(
        repositoryService.DEVOCIONAL_LIST_KEY,
        data,
        true,
      );
    }

    dispatch(setMyDevotionals(ret));

    Alert.alert('Devocional Criado', 'Dados salvos com sucesso');
    const DURATION = 100;

    Vibration.vibrate(DURATION);
    handleCloseScreen();
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
      <ModalWarningBackSheet
        title={'Tem certeza que deseja descartar esta nova devocional?'}
        description={'Se sair, as informações não serão salvas.'}
        onPressCancel={canGoBack}
        onPressContinue={handleCloseWarningModal}
        open={isVisibleWarningModal}
        titleCancel={'Ignorar alterações'}
        titleConfirm={'Continuar Editando'}
      />

      <ScrollView
        contentContainerStyle={{
          paddingBottom: 60,
        }}>
        <TextTitle>Cor</TextTitle>
        <WrapperColorButtons>
          <CustomRadioButton
            data={colorsRadioButtons()}
            selectedColor={selectedColor}
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
            <TextButtonOk>OK</TextButtonOk>
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
