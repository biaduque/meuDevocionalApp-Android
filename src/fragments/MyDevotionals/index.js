import React, {useRef} from 'react';
import {
  Container,
  DescriptionText,
  FlatList,
  FlexContainer,
  Layout,
  Tile,
  TilesLimitingWrapper,
  TilesWrapper,
  Wrapper,
} from './styles';
import DevotionalsComponent from './Devotionals';
import Header from '../../components/Header';
import {Animated, SafeAreaView, Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context/src/SafeAreaContext';

const MyDevotionalsScreen = () => {
  const offset = useRef(new Animated.Value(0)).current;

  const devotionals = [
    {
      id: 1,
      titulo: 'Minha nova devoção',
      ref: 'Salmos 88:13',
      backgroundColor: '#F7D9A1',
      tags: [
        {
          id: 1,
          name: 'amor',
        },
        {
          id: 2,
          name: 'salvação',
        },
        {
          id: 3,
          name: 'vida',
        },
      ],
    },
    {
      id: 2,
      titulo: 'Nem só de pão',
      ref: 'Matheus 4:4',
      backgroundColor: '#FDEDCC',
      tags: [
        {
          id: 1,
          name: 'vida',
        },
      ],
    },
    {
      id: 3,
      titulo:
        'Dia de trabalho muito produtivo, posso agradecer a Deus por isso',
      ref: 'Salmos 42:5',
      backgroundColor: '#FDEDCC',
      tags: [
        {
          id: 1,
          name: 'paz',
        },
        {
          id: 1,
          name: 'refugio',
        },
        {
          id: 1,
          name: 'espírito',
        },
      ],
    },
    {
      id: 4,
      titulo: 'Aquieta minha alma, pois estou em paz',
      ref: 'Salmos 88:13',
      backgroundColor: '#8BA293',
      tags: [
        {
          id: 1,
          name: 'vida',
        },
      ],
    },
  ];

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}} forceInset={{top: 'always'}}>
        <Layout>
          <Header animatedValue={offset} title={'Meus Devocionais'} />

          <Container>
            {devotionals.length <= 0 ? (
              <Wrapper>
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
                    Adicione novos itens customizados em sua coleção ao clicar
                    no botão
                  </DescriptionText>
                </FlexContainer>

                <FlexContainer>
                  <Text style={{marginRight: 26}}>Touch</Text>
                  <DescriptionText>
                    Pressione algum item da sua coleção caso queira exclui-lo
                  </DescriptionText>
                </FlexContainer>
              </Wrapper>
            ) : (
              <FlatList
                contentContainerStyle={{paddingBottom: 40, paddingTop: 120}}
                data={devotionals}
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                  [{nativeEvent: {contentOffset: {y: offset}}}],
                  {useNativeDriver: false},
                )}
                renderItem={({item}) => (
                  <DevotionalsComponent devotional={item} />
                )}
              />
            )}
          </Container>
        </Layout>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default MyDevotionalsScreen;
