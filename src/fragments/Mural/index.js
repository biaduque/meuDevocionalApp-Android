import React from 'react';
import {Animated, SafeAreaView} from 'react-native';
import {Container, Layout} from './styles';
import {SafeAreaProvider} from 'react-native-safe-area-context/src/SafeAreaContext';
import RepeaterMural from './Repeater';
import {useSelector} from 'react-redux';

const Mural = () => {
  const $app = useSelector(state => state.app);
  const mural = [
    {
      id: 1,
      title: 'Pela minha família',
      createdAt: '20/01/2022',
      image: '../../assets/illustrations/book-amarelo2.png',
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

  const onScroll = e => {
    Animated.event([{nativeEvent: {contentOffset: {y: $app.offset}}}], {
      useNativeDriver: false,
    })(e);
  };

  return (
    <Layout>
      <Container>
        <Animated.FlatList
          data={mural}
          numColumns={2}
          contentContainerStyle={{
            paddingTop: 260,
            paddingBottom: 40,
          }}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={e => onScroll(e)}
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
  );
};

export default Mural;
