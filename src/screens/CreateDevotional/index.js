import React, {useEffect, useState} from 'react';
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
  WrapperHeader,
  WrapperInputLabel,
  WrapperReflexao,
  WrapperWorship,
} from './styles';
import {StatusBar, Text, TouchableOpacity} from 'react-native';

const CreateDevotionalScreen = ({route, navigation}) => {
  const {params} = route;
  const colors = [
    {
      id: '1',
      color: '#81978c',
    },
    {
      id: '1',
      color: '#ebb275',
    },
    {
      id: '1',
      color: '#f7d49c',
    },
    {
      id: '1',
      color: '#fce9c6',
    },
  ];

  const [title, setTitle] = useState('');
  const [book, setBook] = useState('');
  const [chapter, setChapter] = useState('');
  const [versicle, setVersicle] = useState('');
  const [key1, setKey1] = useState('');
  const [key2, setKey2] = useState('');
  const [key3, setKey3] = useState('');
  const [music, setMusic] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (params != null) {
      setTitle(params.titulo);
      setBook(params.refBiblica.split(' ')[0]);
      setChapter(params.refBiblica);
    }

    const arr = {
      backgroundColor: 'rgba(236,186,125,.3)',
      conclusao:
        'Nossa oração deve ser contínua para que estejamos atentos em nossas decisões, e sempre quando estivermos frente às duas portas: a estreita e a larga, escolhamos a porta estreita, que por vezes, mesmo que mais difícil, nos leva para mais perto daquele que mais nos amou. Temos a segurança em saber que a vontade do Pai é boa, perfeita e agradável e por isso, podemos descansar na caminhada. ',
      desenvolvimento:
        "Em vida, Jesus pregou em diversos momentos sobre nossa vida com Deus e como é importante que sejamos seguidores em Espírito e em Verdade. Além de falar sobre a importância de produzirmos frutos, amarmos os próximos e espalharmos o amor de Deus, Jesus também falava sobre a dificuldade que encontraríamos em nossos caminhos e no decorrer da vida e uma das analogias usadas para isso foi a da 'Porta estreita'. É muito mais fácil passar por uma porta larga, do que por uma estreita, e assim Jesus comparou a vida do Cristão. As  vezes, seguir a Cristo pode ser difícil. Abrir mão do orgulho, de luxúrias, mentiras, status, amor às coisas materiais e incertezas do cotidiano... abrir a mão do Eu individual para que seu Eu com Cristo seja maior. Entretanto, é a porta mais estreita que nos faz enxergar que todas as coisas que o mundo nos oferecem são poucas perto da grandiosidade do amor de Deus. ",
      id: 30,
      introducao:
        'Entrem pela porta estreita, pois larga é a porta e amplo o caminho que leva à perdição, e são muitos os que entram por ela.',
      musica: 'https://www.youtube.com/watch?v=7SO3ObU99e4',
      refBiblica: 'Mateus 7: 13-14',
      titulo: 'A porta estreita',
    };

    return () => {};
  }, [params]);

  const handleBackScreen = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <ScrollView>
        <StatusBar barStyle={'light-content'} backgroundColor={'#000'} />

        <WrapperHeader>
          <TouchableOpacity onPress={() => handleBackScreen()}>
            <TextButtonCancel>Cancelar</TextButtonCancel>
          </TouchableOpacity>
          <TouchableOpacity>
            <TextButtonSave>Salvar</TextButtonSave>
          </TouchableOpacity>
        </WrapperHeader>

        <TextTitle>Cor</TextTitle>
        <WrapperColorButtons>
          {colors.map(item => (
            <CircleColorButton background={item.color} />
          ))}
        </WrapperColorButtons>

        <Form>
          <TextInput
            placeholder={'Título'}
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            placeholder={'Livro'}
            value={book}
            onChangeText={setBook}
          />
          <TextInput
            placeholder={'Capítulo'}
            value={chapter}
            onChangeText={setChapter}
          />
          <TextInput
            placeholder={'Versículo'}
            value={versicle}
            onChangeText={setVersicle}
          />
          <TextInput
            placeholder={'Palavra chave 1'}
            value={key1}
            onChangeText={setKey1}
          />
          <TextInput
            placeholder={'Palavra chave 2'}
            value={key2}
            onChangeText={setKey2}
          />
          <TextInput
            placeholder={'Palavra chave 3'}
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
            />
            <LabelInfo>
              Você pode inserir links de música do YouTube, SoundCloud, Apple
              Music e Spotify.
            </LabelInfo>
          </WrapperInputLabel>

          <ButtonOkWorship>
            <Text style={{fontSize: 20}}>OK</Text>
          </ButtonOkWorship>
        </WrapperWorship>

        <WrapperReflexao>
          <TextTitle>Reflexão</TextTitle>
          <TextArea
            placeholder={'Comece a escrever...'}
            value={description}
            onChangeText={setDescription}
          />
        </WrapperReflexao>
      </ScrollView>
    </Container>
  );
};

export default CreateDevotionalScreen;
