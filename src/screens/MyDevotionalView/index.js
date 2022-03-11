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
import {ScrollView, TouchableOpacity} from 'react-native';

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
    navigation.navigate('Webview', {
      url: params.devotional.musica,
    });
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

        <TitleScreen>Meu devocional</TitleScreen>

        <RightWrapperHeader>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{marginTop: 0, marginRight: 10}}>Editar</Text>
            <EditIcon onPress={() => handleOpenCreateDevotional()} />
          </TouchableOpacity>
        </RightWrapperHeader>
      </Header>

      <ScrollView>
        <WrapperText>
          <TitleSection>{params.devotional.titulo}</TitleSection>
          <BaseBiblica>{params.devotional.baseBiblica}</BaseBiblica>
          <Text>{params.devotional.reflexao}</Text>
        </WrapperText>
      </ScrollView>

      <Footer>
        <WorshipTimeWrapper onPress={() => navigateToMusic()}>
          <ImageBackground
            source={require('../../assets/illustrations/whorshipTime.png')}
          />
        </WorshipTimeWrapper>
        <TagsWrapper>
          {params.devotional.aplicacao1 && (
            <Tag>{params.devotional.aplicacao1}</Tag>
          )}
          {params.devotional.aplicacao2 && (
            <Tag>{params.devotional.aplicacao2}</Tag>
          )}
          {params.devotional.aplicacao3 && (
            <Tag>{params.devotional.aplicacao3}</Tag>
          )}
        </TagsWrapper>
      </Footer>
    </Layout>
  );
};

export default MyDevotionalView;
