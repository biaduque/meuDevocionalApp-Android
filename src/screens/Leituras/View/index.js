import React, {useState} from 'react';
import {
  BackIcon,
  CirclePlay,
  CustomizedContent,
  EditIcon,
  Header,
  ImageBackground,
  InputAplicacao,
  Layout,
  LeftWrapperHeader,
  MinhaAplicacaoWrapper,
  PlayIcon,
  RightWrapperHeader,
  ShareIcon,
  Text,
  TextVersiculo,
  TitleBackScreen,
  TitleSection,
  WorshipTimeWrapper,
  WrapperText,
} from './styles';
import ModalSheetBottom from '../../../components/ModalSheetBottom';
import {Dimensions, ScrollView, TouchableOpacity, View} from 'react-native';

const LeiturasView = ({route, navigation}) => {
  const params = route.params;

  const {parent} = params;
  const [openModalCreate, setOpenModalCreate] = useState(false);

  const handleOpenCreateDevotional = () => {
    setOpenModalCreate(true);
  };

  const handleCloseCreateDevotional = () => {
    setOpenModalCreate(false);
  };

  const navigateToMusic = () => {
    navigation.navigate('Webview', {
      url: params.musica,
    });
  };

  return (
    <Layout scrollEnabled={!openModalCreate}>
      <ModalSheetBottom
        height={Dimensions.get('window').height}
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
            <TitleBackScreen>Leituras</TitleBackScreen>
          </LeftWrapperHeader>
        </TouchableOpacity>

        <View />

        <RightWrapperHeader>
          <EditIcon onPress={() => handleOpenCreateDevotional()} />
          <ShareIcon />
        </RightWrapperHeader>
      </Header>

      <ScrollView>
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
          <WorshipTimeWrapper onPress={() => navigateToMusic()}>
            <ImageBackground
              source={require('../../../assets/illustrations/whorshipTime.png')}
            />
          </WorshipTimeWrapper>
        ) : (
          <CustomizedContent>
            <WrapperText style={{marginTop: 0}}>
              <TitleSection style={{marginBottom: 10}}>
                Minha aplicação
              </TitleSection>
              <MinhaAplicacaoWrapper>
                <InputAplicacao
                  placeholder={'Como posso aplicar isso na minha vida?'}
                />
              </MinhaAplicacaoWrapper>

              <MinhaAplicacaoWrapper>
                <InputAplicacao
                  placeholder={'Como posso aplicar isso na minha vida?'}
                />
              </MinhaAplicacaoWrapper>

              <MinhaAplicacaoWrapper>
                <InputAplicacao
                  placeholder={'Como posso aplicar isso na minha vida?'}
                />
              </MinhaAplicacaoWrapper>
            </WrapperText>

            <WorshipTimeWrapper>
              <ImageBackground
                source={require('../../../assets/illustrations/whorshipTime.png')}
              />

              <View />

              <CirclePlay onPress={() => navigateToMusic()}>
                <PlayIcon />
              </CirclePlay>
            </WorshipTimeWrapper>
          </CustomizedContent>
        )}
      </ScrollView>
    </Layout>
  );
};

export default LeiturasView;
