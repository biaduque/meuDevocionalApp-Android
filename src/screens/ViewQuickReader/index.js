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
  TitleScreen,
  TitleSection,
  WorshipTimeWrapper,
  WrapperText,
} from './styles';
import ModalSheetBottom from '../../components/ModalSheetBottom';
import {Dimensions, ScrollView, TouchableOpacity, View} from 'react-native';

const VerLeituraRapida = ({route, navigation}) => {
  const params = route.params;
  const [oepnModalCreate, setOepnModalCreate] = useState(false);

  const handleOpenCreateDevotional = () => {
    setOepnModalCreate(true);
  };

  const handleCloseCreateDevotional = () => {
    setOepnModalCreate(false);
  };

  const navigateToMusic = () => {
    navigation.navigate('Webview', {
      url: params.musica,
    });
  };

  return (
    <Layout scrollEnabled={!oepnModalCreate}>
      <ModalSheetBottom
        height={Dimensions.get('window').height}
        open={oepnModalCreate}
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
          <TitleSection>{params.titulo}</TitleSection>
          <TextVersiculo>
            {params.introducao} - {params.refBiblica}
          </TextVersiculo>

          <TitleSection>Contextualização</TitleSection>
          <Text>{params.desenvolvimento}</Text>

          <TitleSection>Reflexão</TitleSection>
          <Text>{params.conclusao}</Text>
        </WrapperText>

        <WorshipTimeWrapper onPress={() => navigateToMusic()}>
          <ImageBackground
            source={require('../../assets/illustrations/whorshipTime.png')}
          />
        </WorshipTimeWrapper>
      </ScrollView>
    </Layout>
  );
};

export default VerLeituraRapida;
