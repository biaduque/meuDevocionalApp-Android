import React, {useState} from 'react';
import {
  EditIcon,
  Header,
  Layout,
  LeftWrapperHeader,
  RightWrapperHeader,
  ShareIcon,
  Text,
  TextVersiculo,
  TitleBackScreen,
  TitleScreen,
  TitleSection,
  WrapperText,
} from './styles';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import ModalSheetBottom from '../../components/ModalSheetBottom';
import {Dimensions, TouchableOpacity} from 'react-native';

const VerLeituraRapida = ({route, navigation}) => {
  const params = route.params;
  const [oepnModalCreate, setOepnModalCreate] = useState(false);

  const handleOpenCreateDevotional = () => {
    setOepnModalCreate(true);
  };

  const handleCloseCreateDevotional = () => {
    setOepnModalCreate(false);
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
            <Feather name="chevron-left" size={32} color="#333" />
            <TitleBackScreen>Leituras</TitleBackScreen>
          </LeftWrapperHeader>
        </TouchableOpacity>

        <TitleScreen>Leitura rápida</TitleScreen>

        <RightWrapperHeader>
          <EditIcon onPress={() => handleOpenCreateDevotional()} />
          <ShareIcon />
        </RightWrapperHeader>
      </Header>

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
    </Layout>
  );
};

export default VerLeituraRapida;
