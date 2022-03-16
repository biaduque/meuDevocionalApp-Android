import React, {useState} from 'react';
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
import {Dimensions, ScrollView, TouchableOpacity, View} from 'react-native';
import ModalCreateSheet from './ModalCreateSheet';
import WorshipTime from '../../../components/WorshipTime';
import ModalUpdateSheet from './ModalUpdateSheet';

const LeiturasView = ({route, navigation}) => {
  const params = route.params;

  const {parent} = params;
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const [aplicacao1, setAplicacao1] = useState('');
  const [aplicacao2, setAplicacao2] = useState('');
  const [aplicacao3, setAplicacao3] = useState('');

  const handleOpenCreateDevotional = () => {
    setOpenModalCreate(true);
  };

  const handleCloseCreateDevotional = () => {
    setOpenModalCreate(false);
  };

  const handleOpenUpdateDevotional = () => {
    setOpenModalUpdate(true);
  };

  const handleCloseUpdateDevotional = () => {
    setOpenModalUpdate(false);
  };

  const navigateToMusic = () => {
    navigation.navigate('Webview', {
      url: params.musica,
    });
  };

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
        itemLeitura={params}
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
              <EditIcon onPress={() => handleOpenCreateDevotional()} />
            ) : (
              <SaveIcon onPress={() => handleOpenUpdateDevotional()} />
            )}
            <ShareIcon />
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
                  onChangeText={setAplicacao1}
                  placeholder={'Como posso aplicar isso na minha vida?'}
                />
              </MinhaAplicacaoWrapper>

              <MinhaAplicacaoWrapper>
                {aplicacao2 !== '' ? <CheckedIcon /> : <UncheckIcon />}
                <InputAplicacao
                  placeholder={'Como posso aplicar isso na minha vida?'}
                  onChangeText={setAplicacao2}
                />
              </MinhaAplicacaoWrapper>

              <MinhaAplicacaoWrapper>
                {aplicacao3 !== '' ? <CheckedIcon /> : <UncheckIcon />}
                <InputAplicacao
                  onChangeText={setAplicacao3}
                  placeholder={'Como posso aplicar isso na minha vida?'}
                />
              </MinhaAplicacaoWrapper>
            </WrapperText>

            <WrapperText style={{marginTop: -30, marginBottom: -20}}>
              <TitleSection>Worship Time!</TitleSection>
            </WrapperText>

            <WorshipTime navigateToMusic={navigateToMusic} />

            <AnnotationsWrapper>
              <TitleSection>Anotações</TitleSection>
              <AnnotationsTextArea placeholder={'Comece a escrever...'} />
            </AnnotationsWrapper>
          </CustomizedContent>
        )}
      </ScrollView>
    </Layout>
  );
};

export default LeiturasView;
