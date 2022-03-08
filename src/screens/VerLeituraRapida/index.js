import React from 'react';
import {
  Header,
  Layout,
  LeftWrapperHeader,
  RightWrapperHeader,
  TitleBackScreen,
  TitleScreen,
} from './styles';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const VerLeituraRapida = () => {
  return (
    <Layout>
      <Header>
        <LeftWrapperHeader>
          <Feather name="chevron-left" size={30} color="#333" />
          <TitleBackScreen>Leituras</TitleBackScreen>
        </LeftWrapperHeader>

        <TitleScreen>Leitura rápida</TitleScreen>

        <RightWrapperHeader>
          <Feather name="edit" size={24} color="#333" />
          <EvilIcons
            name="share-apple"
            size={34}
            color="#333"
            style={{marginLeft: 20}}
          />
        </RightWrapperHeader>
      </Header>
    </Layout>
  );
};

export default VerLeituraRapida;
