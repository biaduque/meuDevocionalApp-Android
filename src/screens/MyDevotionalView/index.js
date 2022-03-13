import React, {useState} from 'react';
import {
  BackIcon,
  BaseBiblica,
  EditIcon,
  Footer,
  Header,
  ImageBackground,
  Layout,
  LeftWrapperHeader,
  RightWrapperHeader,
  ShareIcon,
  Tag,
  TagsWrapper,
  Text,
  TitleBackScreen,
  TitleScreen,
  TitleSection,
  WorshipTimeWrapper,
  WrapperText,
} from './styles';
import ModalSheetBottom from '../../components/ModalSheetBottom';
import {ScrollView, TouchableOpacity, View} from 'react-native';

const MyDevotionalView = ({route, navigation}) => {
  const params = route.params;
  const [openModalCreate, setOpenModalCreate] = useState(false);

  const handleOpenCreateDevotional = () => {
    setOpenModalCreate(true);
  };

  const handleCloseCreateDevotional = () => {
    setOpenModalCreate(false);
  };

  const navigateToMusic = () => {
    //TODO: verificar se link é valido;
    if (params.devotional.link != null || params.devotional.link !== '') {
      navigation.navigate('Webview', {
        url: params.devotional.link,
      });
    } else {
      navigation.navigate('Webview', {
        url: 'https://www.youtube.com/watch?v=7SO3ObU99e4&list=RD7SO3ObU99e4&start_radio=1',
      });
    }
  };

  return (
    <Layout scrollEnabled={!openModalCreate}>
      <ModalSheetBottom
        open={openModalCreate}
        onClose={handleCloseCreateDevotional}
        title={'Criar nova devocional'}
        description={
          'Deseja criar uma nova devocional através dessa devocional rápida?'
        }
        titleConfirm={'Criar nova devocional'}
      />

      <Header>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <LeftWrapperHeader>
            <BackIcon />
            <TitleBackScreen>Voltar</TitleBackScreen>
          </LeftWrapperHeader>
        </TouchableOpacity>

        <View />

        <RightWrapperHeader>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <EditIcon onPress={() => handleOpenCreateDevotional()} />
            <ShareIcon />
          </TouchableOpacity>
        </RightWrapperHeader>
      </Header>

      <ScrollView>
        <WrapperText>
          {/* TODO: implementar cor que foi salva no banco */}
          {params.devotional.titulo !== '' && (
            <TitleSection color={'#000'}>
              {params.devotional.titulo}
            </TitleSection>
          )}
          {params.devotional.baseBiblica !== '' && (
            <BaseBiblica>{params.devotional.baseBiblica}</BaseBiblica>
          )}
          {params.devotional.reflexao !== '' && (
            <Text>{params.devotional.reflexao}</Text>
          )}
        </WrapperText>
      </ScrollView>

      <Footer>
        <WorshipTimeWrapper onPress={() => navigateToMusic()}>
          <ImageBackground
            source={require('../../assets/illustrations/whorshipTime.png')}
          />
        </WorshipTimeWrapper>
        <TagsWrapper>
          {params.devotional.aplicacao1 !== '' && (
            <Tag>{params.devotional.aplicacao1}</Tag>
          )}
          {params.devotional.aplicacao2 !== '' && (
            <Tag>{params.devotional.aplicacao2}</Tag>
          )}
          {params.devotional.aplicacao3 !== '' && (
            <Tag>{params.devotional.aplicacao3}</Tag>
          )}
        </TagsWrapper>
      </Footer>
    </Layout>
  );
};

export default MyDevotionalView;
