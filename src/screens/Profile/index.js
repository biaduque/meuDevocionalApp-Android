import React from 'react';
import {
  ButtonOkWorship,
  ButtonText,
  ButtonWrapper,
  CircleColorButton,
  Container,
  Form,
  LabelInfo,
  LeftWrapperButton,
  ProfileImage,
  TextArea,
  TextInput,
  TextInputBorder,
  TextTitle,
  TransparentButton,
  Username,
  WrapperColorButtons,
  WrapperHeader,
  WrapperInputLabel,
  WrapperMenu,
  WrapperProfile,
  WrapperReflexao,
  WrapperWorship,
} from './styles';
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import TopContent from '../../components/TopContent';
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  Heart,
  Logout,
  Search,
  Setting,
  User,
} from 'react-native-iconly';
import {useNavigation} from '@react-navigation/core';

const ProfileScreen = () => {
  const navigation = useNavigation();
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

  const handleBackScreen = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <ScrollView>
        <StatusBar barStyle={'light-content'} backgroundColor={'#000'} />

        <WrapperHeader>
          <TouchableOpacity>
            <Text style={{color: '#d55757', fontSize: 18}}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{color: '#2f3330', fontSize: 18}}>Salvar</Text>
          </TouchableOpacity>
        </WrapperHeader>

        <TextTitle>Cor</TextTitle>
        <WrapperColorButtons>
          {colors.map(item => (
            <CircleColorButton background={item.color} />
          ))}
        </WrapperColorButtons>

        <Form>
          <TextInput placeholder={'Título'} />
          <TextInput placeholder={'Livro'} />
          <TextInput placeholder={'Capítulo'} />
          <TextInput placeholder={'Versículo'} />
          <TextInput
            placeholder={'Palavra chave 1'}
            placeholderTextColor={'#999'}
          />
          <TextInput
            placeholder={'Palavra chave 2'}
            placeholderTextColor={'#999'}
          />
          <TextInput
            placeholder={'Palavra chave 3'}
            placeholderTextColor={'#999'}
          />
        </Form>

        <TextTitle style={{marginTop: 42}}>My worship time!</TextTitle>
        <WrapperWorship>
          <WrapperInputLabel>
            <TextInputBorder placeholder={'Insira um link de música...'} />
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
          <TextArea placeholder={'Comece a escrever...'} />
        </WrapperReflexao>
      </ScrollView>
    </Container>
  );
};

export default ProfileScreen;
