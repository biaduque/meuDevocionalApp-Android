import React, {useState} from 'react';
import {
  BackIcon,
  BaseBiblica,
  EditIcon,
  Footer,
  Header,
  Layout,
  LeftWrapperHeader,
  RightWrapperHeader,
  ShareIcon,
  Tag,
  TagsWrapper,
  Text,
  TitleBackScreen,
  TitleSection,
  WrapperText,
} from './styles';
import {Dimensions, ScrollView, TouchableOpacity, View} from 'react-native';
import WorshipTime from '../../../components/WorshipTime';
import ModalCreateSheet from './ModalCreateSheet';

const MyDevotionalView = ({route, navigation}) => {
  const params = route.params;
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [itemToUpdate, setItemToUpdate] = useState({});

  const handleOpenCreateDevotional = () => {
    setOpenModalCreate(true);
  };

  const handleCloseCreateDevotional = () => {
    setOpenModalCreate(false);
  };

  const navigateToMusic = () => {
    let link;
    const linkMusic = params.devotional.link;
    const defaultLinkMusic =
      'https://www.youtube.com/watch?v=7SO3ObU99e4&list=RD7SO3ObU99e4&start_radio=1';

    if (linkMusic != null) {
      isValidHttpUrl(linkMusic)
        ? (link = linkMusic)
        : (link = defaultLinkMusic);
    } else {
      link = defaultLinkMusic;
    }

    navigation.navigate('Webview', {
      url: link,
    });
  };

  function isValidHttpUrl(string) {
    const pattern = new RegExp(
      '^(https?:\\/\\/)?' +
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
        '((\\d{1,3}\\.){3}\\d{1,3}))' +
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
        '(\\?[;&a-z\\d%_.~+=-]*)?' +
        '(\\#[-a-z\\d_]*)?$',
      'i',
    );
    return !!pattern.test(string);
  }

  const getItemToUpdate = () => {
    if (params.devotional.id) {
      return {
        id: params.devotional.id,
        update: true,
        titulo: params.devotional.titulo,
        refBiblica: params.devotional.baseBiblica,
        aplicacao1: params.devotional.aplicacao1,
        aplicacao2: params.devotional.aplicacao2,
        aplicacao3: params.devotional.aplicacao3,
        musica: params.devotional.link,
        desenvolvimento: params.devotional.reflexao,
        backgroundColor: params.devotional.backgroundColor,
      };
    } else {
      return {
        update: false,
        titulo: params.devotional.titulo,
        refBiblica: params.devotional.baseBiblica,
        aplicacao1: params.devotional.aplicacao1,
        aplicacao2: params.devotional.aplicacao2,
        aplicacao3: params.devotional.aplicacao3,
        musica: params.devotional.link,
        desenvolvimento: params.devotional.reflexao,
        backgroundColor: params.devotional.backgroundColor,
      };
    }
  };

  return (
    <Layout scrollEnabled={!openModalCreate}>
      <ModalCreateSheet
        height={Dimensions.get('window').height}
        open={openModalCreate}
        itemLeitura={{
          ...getItemToUpdate(),
        }}
        handleClose={handleCloseCreateDevotional}
        title={'Editar devocional?'}
        description={'Tem certeza que deseja editar este devocional?'}
        titleConfirm={'Editar Devocional'}
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
          </TouchableOpacity>

          {/*TODO: share: titulo, ref biblica, reflexao, musica.*/}
          {/*  𝑀𝑒𝓊 𝒟𝑒𝓋𝑜𝒸𝒾𝑜𝓃𝒶𝓁*/}

          <ShareIcon />
        </RightWrapperHeader>
      </Header>

      <ScrollView>
        <WrapperText>
          {params.devotional.titulo !== '' && (
            <TitleSection color={params.colors.background}>
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
        <WorshipTime navigateToMusic={navigateToMusic} />

        {params.devotional.aplicacao1 !== '' ||
          params.devotional.aplicacao2 !== '' ||
          (params.devotional.aplicacao3 !== '' && (
            <TagsWrapper>
              <Tag>{params.devotional.aplicacao1}</Tag>
              <Tag>{params.devotional.aplicacao2}</Tag>
              <Tag>{params.devotional.aplicacao3}</Tag>
            </TagsWrapper>
          ))}

        <TagsWrapper>
          {params.devotional.aplicacao1 != null && (
            <Tag color={params.colors.background}>
              {params.devotional.aplicacao1}
            </Tag>
          )}
          {params.devotional.aplicacao2 != null && (
            <Tag color={params.colors.background}>
              {params.devotional.aplicacao2}
            </Tag>
          )}
          {params.devotional.aplicacao3 != null && (
            <Tag color={params.colors.background}>
              {params.devotional.aplicacao3}
            </Tag>
          )}
        </TagsWrapper>
      </Footer>
    </Layout>
  );
};

export default MyDevotionalView;
