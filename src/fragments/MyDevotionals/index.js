import React, {useRef} from 'react';
import {Container, FlatList, Layout} from './styles';
import DevotionalsComponent from './Devotionals';
import Header from '../../components/Header';
import {Animated, SafeAreaView} from 'react-native';
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
            {devotionals.length <= 0 ? null : (
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
