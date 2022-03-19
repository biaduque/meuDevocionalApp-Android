import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {
  DescriptionText,
  FlexContainer,
  Header,
  Layout,
  OkText,
  Tile,
  TilesLimitingWrapper,
  TilesWrapper,
  TouchIcon,
  Wrapper,
} from './styles';
import {PlusIcon} from '../../components/Header/styles';

const InfoGeneric = ({navigation}) => {
  return (
    <Layout>
      <Header>
        <View />

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <OkText>OK</OkText>
        </TouchableOpacity>
      </Header>

      <Wrapper>
        <TilesWrapper>
          <TilesLimitingWrapper>
            <Tile background={'#F7D9A0'} />
            <Tile background={'#ECBA7D'} />
            <Tile background={'#8BA293'} />
          </TilesLimitingWrapper>
        </TilesWrapper>

        <View>
          <FlexContainer>
            <PlusIcon />
            <DescriptionText>
              Adicione novos itens customizados em sua coleção ao clicar no
              botão
            </DescriptionText>
          </FlexContainer>

          <FlexContainer>
            <TouchIcon />
            <DescriptionText>
              Pressione algum item da sua coleção caso queira exclui-lo
            </DescriptionText>
          </FlexContainer>
        </View>
      </Wrapper>

      <View />
    </Layout>
  );
};

export default InfoGeneric;
