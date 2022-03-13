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
        <WorshipTimeWrapper onPress={() => navigateToMusic()}>
          <ImageBackground
            source={require('../../assets/illustrations/whorshipTime.png')}
          />
        </WorshipTimeWrapper>
        <TagsWrapper>
          {params.devotional.aplicacao1 !== '' && (
            <Tag color={params.colors.tagsBackground}>
              {params.devotional.aplicacao1}
            </Tag>
          )}
          {params.devotional.aplicacao2 !== '' && (
            <Tag color={params.colors.tagsBackground}>
              {params.devotional.aplicacao2}
            </Tag>
          )}
          {params.devotional.aplicacao3 !== '' && (
            <Tag color={params.colors.tagsBackground}>
              {params.devotional.aplicacao3}
            </Tag>
          )}
        </TagsWrapper>
      </Footer>
    </Layout>
  );
};

export default MyDevotionalView;
