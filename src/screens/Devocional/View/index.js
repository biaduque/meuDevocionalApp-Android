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
import {
  Dimensions,
  ScrollView,
  TouchableOpacity,
  View,
  Share,
  Keyboard,
} from 'react-native';
import WorshipTime from '../../../components/WorshipTime';
import ModalCreateSheet from './ModalCreateSheet';
import {useSelector} from 'react-redux';

const MyDevotionalView = ({route, navigation}) => {
  const params = route.params;

  const $devotional = useSelector(
    state => state.myDevotionals.selectedDevocional,
  );

  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [openShare, setOpenShare] = useState(false);

  const handleOpenCreateDevotional = () => {
    setOpenModalCreate(true);
  };

  const handleCloseCreateDevotional = () => {
    setOpenModalCreate(false);
  };

  const navigateToMusic = () => {
    let link;
    const linkMusic = $devotional.link;
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
    if ($devotional.id) {
      return {
        id: $devotional.id,
        update: true,
        titulo: $devotional.titulo,
        refBiblica: $devotional.baseBiblica,
        livro: $devotional.livro,
        capitulo: $devotional.capitulo,
        versiculo: $devotional.versiculo,
        aplicacao1: $devotional.aplicacao1,
        aplicacao2: $devotional.aplicacao2,
        aplicacao3: $devotional.aplicacao3,
        musica: $devotional.link,
        desenvolvimento: $devotional.reflexao,
        backgroundColor: $devotional.backgroundColor,
      };
    } else {
      return {
        update: false,
        titulo: $devotional.titulo,
        refBiblica: $devotional.baseBiblica,
        aplicacao1: $devotional.aplicacao1,
        aplicacao2: $devotional.aplicacao2,
        aplicacao3: $devotional.aplicacao3,
        musica: $devotional.link,
        desenvolvimento: $devotional.reflexao,
        backgroundColor: $devotional.backgroundColor,
      };
    }
  };

  async function shareGeneric() {
    Keyboard.dismiss();

    const showTitulo =
      $devotional.titulo != null ? `✨${$devotional.titulo}` : '';

    const showRefBiblica = `✨${$devotional.livro} ${$devotional.capitulo} ${$devotional.versiculo}`;

    const showReflexao =
      $devotional.reflexao != null ? `✨${$devotional.reflexao}` : '';

    const showLink = $devotional.link != null ? `✨${$devotional.link}` : '';

    const shareContent = {
      title: '𝑀𝑒𝓊 𝒟𝑒𝓋𝑜𝒸𝒾𝑜𝓃𝒶𝓁',
      message: `
𝑀𝑒𝓊 𝒟𝑒𝓋𝑜𝒸𝒾𝑜𝓃𝒶𝓁
${showTitulo}
${showRefBiblica}
${showReflexao}
${showLink}
`,
    };

    if (!openShare) {
      try {
        setOpenShare(true);
        await Share.share(shareContent, {
          dialogTitle: 'Compartilhar leitura',
        });

        setOpenShare(false);
      } catch (e) {
        setOpenShare(false);
        console.log(e);
      }
    }
  }

  const renderBaseBiblica = () => {
    const hasLivro = $devotional.livro != null && $devotional.livro !== '';
    const hasCapitulo =
      $devotional.capitulo != null && $devotional.capitulo !== '';
    const hasVersiculo =
      $devotional.versiculo != null && $devotional.versiculo !== '';

    if (hasLivro && hasCapitulo && hasVersiculo) {
      return `${$devotional.livro} ${$devotional.capitulo}:${$devotional.versiculo}`;
    }

    if ($devotional.livro != null && $devotional.capitulo != null) {
      return `${$devotional.livro} ${$devotional.capitulo}`;
    }

    if ($devotional.livro != null) {
      return `${$devotional.livro}`;
    }

    return '';
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
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => handleOpenCreateDevotional()}>
            <EditIcon />
          </TouchableOpacity>

          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => shareGeneric()}>
            <ShareIcon />
          </TouchableOpacity>
        </RightWrapperHeader>
      </Header>

      <ScrollView>
        <WrapperText>
          {$devotional.titulo !== '' && (
            <TitleSection color={params.colors.background}>
              {$devotional.titulo}
            </TitleSection>
          )}

          {<BaseBiblica>{renderBaseBiblica()}</BaseBiblica>}

          {$devotional.reflexao !== '' && <Text>{$devotional.reflexao}</Text>}
        </WrapperText>
      </ScrollView>

      <Footer>
        <WorshipTime navigateToMusic={navigateToMusic} />

        {$devotional.aplicacao1 !== '' ||
          $devotional.aplicacao2 !== '' ||
          ($devotional.aplicacao3 !== '' && (
            <TagsWrapper>
              <Tag>{$devotional.aplicacao1}</Tag>
              <Tag>{$devotional.aplicacao2}</Tag>
              <Tag>{$devotional.aplicacao3}</Tag>
            </TagsWrapper>
          ))}

        <TagsWrapper>
          {$devotional.aplicacao1 != null && (
            <Tag color={params.colors.background}>{$devotional.aplicacao1}</Tag>
          )}
          {$devotional.aplicacao2 != null && (
            <Tag color={params.colors.background}>{$devotional.aplicacao2}</Tag>
          )}
          {$devotional.aplicacao3 != null && (
            <Tag color={params.colors.background}>{$devotional.aplicacao3}</Tag>
          )}
        </TagsWrapper>
      </Footer>
    </Layout>
  );
};

export default MyDevotionalView;
