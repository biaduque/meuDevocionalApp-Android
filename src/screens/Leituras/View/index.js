import React, {useState} from 'react';
import {
  BackIcon,
  EditIcon,
  Header,
  ImageBackground,
  Layout,
  LeftWrapperHeader,
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

          {params.introducao !== '' && params.refBiblica !== '' && (
            <TextVersiculo>
              {params.introducao} - {params.refBiblica}
            </TextVersiculo>
          )}

          <TitleSection>Contextualização</TitleSection>
          {params.desenvolvimento !== '' && (
            <Text>{params.desenvolvimento}</Text>
          )}

          <TitleSection>Reflexão</TitleSection>
          {params.conclusao !== '' && <Text>{params.conclusao}</Text>}
        </WrapperText>

        {parent === 'LeiturasRapidas' ? null : (
          <View>
            <Text>bla bla bla</Text>
          </View>
        )}

        <WorshipTimeWrapper onPress={() => navigateToMusic()}>
          <ImageBackground
            source={require('../../../assets/illustrations/whorshipTime.png')}
          />
        </WorshipTimeWrapper>
      </ScrollView>
    </Layout>
  );
};

export default LeiturasView;
