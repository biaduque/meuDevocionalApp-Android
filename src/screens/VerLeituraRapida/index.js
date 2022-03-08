import React, {useState} from 'react';
import {
  Header,
  Layout,
  LeftWrapperHeader,
  RightWrapperHeader,
  Text,
  TitleBackScreen,
  TitleScreen,
  TitleSection,
  WrapperText,
} from './styles';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import ModalSheetBottom from '../../components/ModalSheetBottom';

const VerLeituraRapida = () => {
  const [oepnModalCreate, setOepnModalCreate] = useState(false);

  const handleOpenCreateDevotional = () => {
    setOepnModalCreate(true);
  };

  const handleCloseCreateDevotional = () => {
    setOepnModalCreate(false);
  };

  return (
    <Layout>
      <ModalSheetBottom
        open={oepnModalCreate}
        onClose={handleCloseCreateDevotional}
        title={'Criar nova devocional'}
        description={
          'Deseja criar uma nova devocional através dessa devocional rápida?'
        }
        titleConfirm={'Criar nova devocional'}
      />
      <Header>
        <LeftWrapperHeader>
          <Feather name="chevron-left" size={32} color="#333" />
          <TitleBackScreen>Leituras</TitleBackScreen>
        </LeftWrapperHeader>

        <TitleScreen>Leitura rápida</TitleScreen>

        <RightWrapperHeader>
          <Feather
            name="edit"
            size={24}
            color="#333"
            onPress={() => handleOpenCreateDevotional()}
          />
          <EvilIcons
            name="share-apple"
            size={34}
            color="#333"
            style={{marginLeft: 20}}
          />
        </RightWrapperHeader>
      </Header>

      <WrapperText>
        <TitleSection>Aquieta minha alma</TitleSection>
        <Text>Texto Aqui</Text>

        <TitleSection>Contextualização</TitleSection>
        <Text>Texto Aqui</Text>

        <TitleSection>Reflexão</TitleSection>
        <Text>Texto Aqui</Text>
      </WrapperText>
    </Layout>
  );
};

export default VerLeituraRapida;
