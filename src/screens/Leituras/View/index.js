import React, {useEffect, useState} from 'react';
import {
  AnnotationsTextArea,
  AnnotationsWrapper,
  BackdropBackgroundHeader,
  BackIcon,
  CheckedIcon,
  ContainerHeader,
  CustomizedContent,
  EditIcon,
  Header,
  InputAplicacao,
  Layout,
  LeftWrapperHeader,
  MinhaAplicacaoWrapper,
  RightWrapperHeader,
  SaveIcon,
  ShareIcon,
  Text,
  TextVersiculo,
  TitleBackScreen,
  TitleSection,
  UncheckIcon,
  WrapperText,
} from './styles';
import {
  Dimensions,
  ScrollView,
  TouchableOpacity,
  View,
  Keyboard,
  Share,
} from 'react-native';
import ModalCreateSheet from './ModalCreateSheet';
import WorshipTime from '../../../components/WorshipTime';
import ModalUpdateSheet from './ModalUpdateSheet';
import uuid from 'react-native-uuid';
import LocalRepositoryService from '../../../services/LocalRepositoryService';
import {default as ShareRN} from 'react-native-share';
import Utils from '../../../common/utils';

const LeiturasView = ({route, navigation}) => {
  const params = route.params;
  const localRepository = new LocalRepositoryService();
  const utils = new Utils();

  const {parent} = params;
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const [aplicacao1, setAplicacao1] = useState('');
  const [aplicacao2, setAplicacao2] = useState('');
  const [aplicacao3, setAplicacao3] = useState('');
  const [reflexao, setReflexao] = useState('');
  const [itemToUpdate, setItemToUpdate] = useState({});

  useEffect(() => {
    async function getData() {
      const data = await localRepository.get(
        localRepository.LEITURAS_LIST_KEY,
        true,
      );

      if (data != null) {
        const currentItem = data.find(
          item => item.localId === params.id && item.type === parent,
        );

        if (currentItem != null) {
          const aplicacao1 = currentItem.aplicacao1;
          const aplicacao2 = currentItem.aplicacao2;
          const aplicacao3 = currentItem.aplicacao3;
          const reflexao = currentItem.reflexao;

          setAplicacao1(aplicacao1);
          setAplicacao2(aplicacao2);
          setAplicacao3(aplicacao3);
          setReflexao(reflexao);
        }
      }
    }

    getData();

    return () => {};
  }, []);

  const handleOpenCreateDevotional = () => {
    Keyboard.dismiss();
    setOpenModalCreate(true);
  };

  const handleCloseCreateDevotional = () => {
    setOpenModalCreate(false);
  };

  const handleOpenUpdateDevotional = () => {
    Keyboard.dismiss();
    setOpenModalUpdate(true);
    setItemToUpdate({
      localId: params.id,
      id: uuid.v4(),
      type: parent,
      aplicacao1,
      aplicacao2,
      aplicacao3,
      reflexao,
    });
  };

  const handleCloseUpdateDevotional = () => {
    setOpenModalUpdate(false);
  };

  const navigateToMusic = () => {
    navigation.navigate('Webview', {
      url: params.musica,
    });
  };

  async function shareData() {
    if (parent === 'LeiturasRapidas') {
      await shareLeiturasRapidas();
    } else {
      await shareGeneric();
    }
  }

  async function shareLeiturasRapidas() {
    Keyboard.dismiss();
    const shareContent = {
      title: 'Compartilhar leitura',
      message: `
Olha a devocional que eu encontrei no Meu Devocional app!
✨${params.titulo}
✨${params.refBiblica}
✨${params.desenvolvimento}
✨${params.conclusao}
✨${params.musica}
`,
    };

    await Share.share(shareContent, {
      dialogTitle: 'Compartilhar leitura',
    });
  }

  async function shareGeneric() {
    Keyboard.dismiss();

    const shareContent = {
      title: 'Compartilhar leitura',
      url: utils.getImageToShare(params.storyImage),
      backgroundImage: utils.getImageToShare(params.storyImage),
      social: ShareRN.Social.INSTAGRAM_STORIES,
      message: `
Olha a devocional que eu encontrei no Meu Devocional app!
✨${params.titulo}
✨${params.refBiblica}
✨${params.desenvolvimento}
✨${params.conclusao}
✨${params.musica}
`,
    };

    try {
      await ShareRN.open(shareContent);
    } catch (e) {}
  }

  return (
    <Layout>
      <ModalCreateSheet
        height={Dimensions.get('window').height}
        open={openModalCreate}
        itemLeitura={params}
        handleClose={handleCloseCreateDevotional}
        title={'Criar nova devocional'}
        description={
          'Deseja criar uma nova devocional através dessa devocional rápida?'
        }
        titleConfirm={'Criar nova devocional'}
      />

      <ModalUpdateSheet
        height={Dimensions.get('window').height}
        open={openModalUpdate}
        itemToUpdate={itemToUpdate}
        handleClose={handleCloseUpdateDevotional}
        title={'Atualizar Dados'}
        description={'Deseja atualizar os dados?'}
        titleConfirm={'Atualizar'}
      />

      <Header>
        <BackdropBackgroundHeader />
        <ContainerHeader>
          <TouchableOpacity
            style={{paddingLeft: 14}}
            onPress={() => navigation.goBack()}>
            <LeftWrapperHeader>
              <BackIcon />
              <TitleBackScreen>Leituras</TitleBackScreen>
            </LeftWrapperHeader>
          </TouchableOpacity>

          <View />

          <RightWrapperHeader>
            {parent === 'LeiturasRapidas' ? (
              <TouchableOpacity onPress={() => handleOpenCreateDevotional()}>
                <EditIcon />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => handleOpenUpdateDevotional()}>
                <SaveIcon />
              </TouchableOpacity>
            )}

            <ShareIcon onPress={() => shareData()} />
          </RightWrapperHeader>
        </ContainerHeader>
      </Header>

      <ScrollView
        scrollEnabled={!openModalCreate}
        showsVerticalScrollIndicator={false}>
        <WrapperText>
          {params.titulo !== '' && <TitleSection>{params.titulo}</TitleSection>}

          {parent === 'LeiturasRapidas' ? (
            params.introducao !== '' &&
            params.refBiblica !== '' && (
              <TextVersiculo>
                {params.introducao} - {params.refBiblica}
              </TextVersiculo>
            )
          ) : (
            <TextVersiculo>{params.refBiblica}</TextVersiculo>
          )}

          <TitleSection>Contextualização</TitleSection>
          {params.desenvolvimento !== '' && (
            <Text>{params.desenvolvimento}</Text>
          )}

          {params.reflexao != null && (
            <>
              <TitleSection>Reflexão</TitleSection>
              <Text>{params.reflexao}</Text>
            </>
          )}

          <TitleSection>Conclusão</TitleSection>
          {params.conclusao !== '' && <Text>{params.conclusao}</Text>}
        </WrapperText>

        {parent === 'LeiturasRapidas' ? (
          <>
            <WrapperText style={{marginTop: -10, marginBottom: -20}}>
              <TitleSection>Worship Time!</TitleSection>
            </WrapperText>

            <WorshipTime navigateToMusic={navigateToMusic} />
          </>
        ) : (
          <CustomizedContent>
            <WrapperText style={{marginTop: 0}}>
              <TitleSection style={{marginBottom: 10}}>
                Minha aplicação
              </TitleSection>
              <MinhaAplicacaoWrapper>
                {aplicacao1 !== '' ? <CheckedIcon /> : <UncheckIcon />}
                <InputAplicacao
                  placeholder={'Como posso aplicar isso na minha vida?'}
                  onChangeText={setAplicacao1}
                  value={aplicacao1}
                />
              </MinhaAplicacaoWrapper>

              <MinhaAplicacaoWrapper>
                {aplicacao2 !== '' ? <CheckedIcon /> : <UncheckIcon />}
                <InputAplicacao
                  placeholder={'Como posso aplicar isso na minha vida?'}
                  onChangeText={setAplicacao2}
                  value={aplicacao2}
                />
              </MinhaAplicacaoWrapper>

              <MinhaAplicacaoWrapper>
                {aplicacao3 !== '' ? <CheckedIcon /> : <UncheckIcon />}
                <InputAplicacao
                  placeholder={'Como posso aplicar isso na minha vida?'}
                  onChangeText={setAplicacao3}
                  value={aplicacao3}
                />
              </MinhaAplicacaoWrapper>
            </WrapperText>

            <WrapperText style={{marginTop: -30, marginBottom: -20}}>
              <TitleSection>Worship Time!</TitleSection>
            </WrapperText>

            <WorshipTime navigateToMusic={navigateToMusic} />

            <AnnotationsWrapper>
              <TitleSection>Anotações</TitleSection>
              <AnnotationsTextArea
                placeholder={'Comece a escrever...'}
                onChangeText={setReflexao}
                value={reflexao}
              />
            </AnnotationsWrapper>
          </CustomizedContent>
        )}
      </ScrollView>
    </Layout>
  );
};

export default LeiturasView;
