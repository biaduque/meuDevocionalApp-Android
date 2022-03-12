import React, {useRef} from 'react';
import {Animated, SafeAreaView, Text, View} from 'react-native';
import {Container, FlatList, Layout} from './styles';
import Header from '../../components/Header';
import {SafeAreaProvider} from 'react-native-safe-area-context/src/SafeAreaContext';
import RepeaterMural from './Repeater';

const Mural = () => {
  const offset = useRef(new Animated.Value(0)).current;
  const mural = [
    {
      id: 1,
      title: 'Pela minha família',
      createdAt: '20/01/2022',
      image: '../../assets/illustrations/Variante9.png',
      backgroundColor: '#ecba7d',
    },
    {
      id: 2,
      title: 'Pelos meus amigos',
      createdAt: '20/01/2022',
      backgroundColor: '#F7D9A0',
    },
    {
      id: 3,
      title: 'Por recomeços',
      createdAt: '20/01/2022',
      backgroundColor: '#8BA293',
    },
    {
      id: 4,
      title: 'Pela minha vida',
      createdAt: '20/01/2022',
      backgroundColor: '#F7D9A0',
    },
    {
      id: 5,
      title: 'Por recomeços',
      createdAt: '20/01/2022',
      backgroundColor: '#ecba7d',
    },
    {
      id: 6,
      title: 'Pela minha vida',
      createdAt: '20/01/2022',
      backgroundColor: '#8BA293',
    },
  ];

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}} forceInset={{top: 'always'}}>
        <Layout>
          <Header animatedValue={offset} title={'Mural'} />

          <Container>
            <FlatList
              contentContainerStyle={{paddingBottom: 40, paddingTop: 120}}
              data={mural}
              showsVerticalScrollIndicator={false}
              scrollEventThrottle={16}
              numColumns={2}
              onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {y: offset}}}],
                {useNativeDriver: false},
              )}
              renderItem={({item}) => (
                <RepeaterMural
                  backgroundColor={item.backgroundColor}
                  title={item.title}
                  createdAt={item.createdAt}
                  image={item.image}
                />
              )}
            />
          </Container>
        </Layout>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Mural;
