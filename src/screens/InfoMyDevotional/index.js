import React from 'react';
import {StatusBar, Text} from 'react-native';
import {
  DescriptionText,
  FlexContainer,
  Tile,
  TilesLimitingWrapper,
  TilesWrapper,
  Wrapper,
} from './styles';

const InfoMyDevotional = () => {
  return (
    <Wrapper>
      <StatusBar barStyle={'light-content'} backgroundColor={'#000'} />

      <TilesWrapper>
        <TilesLimitingWrapper>
          <Tile background={'#F7D9A0'} />
          <Tile background={'#ECBA7D'} />
          <Tile background={'#8BA293'} />
        </TilesLimitingWrapper>
      </TilesWrapper>

      <FlexContainer>
        <Text style={{marginRight: 26}}>Plus</Text>
        <DescriptionText>
          Adicione novos itens customizados em sua coleção ao clicar no botão
        </DescriptionText>
      </FlexContainer>

      <FlexContainer>
        <Text style={{marginRight: 26}}>Touch</Text>
        <DescriptionText>
          Pressione algum item da sua coleção caso queira exclui-lo
        </DescriptionText>
      </FlexContainer>
    </Wrapper>
  );
};

export default InfoMyDevotional;
