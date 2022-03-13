import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {
  DescriptionText,
  FlexContainer,
  Header,
  Layout,
  Tile,
  TilesLimitingWrapper,
  TilesWrapper,
  Wrapper,
} from './styles';

const InfoMyDevotional = ({navigation}) => {
  return (
    <Layout>
      <Header>
        <View />

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>OK</Text>
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
            <Text style={{marginRight: 26}}>Plus</Text>
            <DescriptionText>
              Adicione novos itens customizados em sua coleção ao clicar no
              botão
            </DescriptionText>
          </FlexContainer>

          <FlexContainer>
            <Text style={{marginRight: 26}}>Touch</Text>
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

export default InfoMyDevotional;