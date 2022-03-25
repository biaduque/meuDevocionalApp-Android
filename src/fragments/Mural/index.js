import React, {useEffect, useState} from 'react';
import {Animated, View, Image} from 'react-native';
import {
  Button,
  Container,
  Description,
  Layout,
  TextButton,
  Title,
  ViewEmptyList,
} from './styles';
import RepeaterMural from './Repeater';
import {useSelector} from 'react-redux';
import Utils from '../../common/utils';
import ThreeBoks from '../../assets/illustrations/three-books.png';
import {Loading} from '../../components/Loading/styles';

const Mural = ({navigation}) => {
  const utils = new Utils();
  const $app = useSelector(state => state.app);
  const $myDevotionals = useSelector(state => state.myDevotionals);

  const [mural, setMural] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getMural() {
      if ($myDevotionals.mural && $myDevotionals.mural.length > 0) {
        const assertedArray = utils.assertArray(
          $myDevotionals.mural,
          'createdAt',
        );
        setMural(assertedArray);

        setLoading(false);
      } else {
        setMural([]);
        setLoading(false);
      }
    }

    getMural();

    return () => {
      setMural([]);
    };
  }, [$myDevotionals.mural]);

  const onScroll = e => {
    Animated.event([{nativeEvent: {contentOffset: {y: $app.offset}}}], {
      useNativeDriver: false,
    })(e);
  };

  const goToCreateMural = () => {
    navigation.navigate('CreateMural');
  };

  return (
    <Layout>
      {loading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Loading />
        </View>
      ) : (
        <Container>
          {mural.length <= 0 ? (
            <ViewEmptyList>
              <Image source={ThreeBoks} />
              <Title>
                Você ainda não possui nenhum motivo de gratidão adicionado no
                mural...
              </Title>

              <Description>Adicione um para começar!</Description>

              <Button onPress={() => goToCreateMural()}>
                <TextButton>Criar Motivo</TextButton>
              </Button>
            </ViewEmptyList>
          ) : (
            <Animated.FlatList
              data={mural}
              numColumns={2}
              contentContainerStyle={{
                paddingTop: 260,
                paddingBottom: 120,
              }}
              showsVerticalScrollIndicator={false}
              scrollEventThrottle={16}
              onScroll={e => onScroll(e)}
              renderItem={({item}) => (
                <RepeaterMural item={item} theme={$app.theme} />
              )}
            />
          )}
        </Container>
      )}
    </Layout>
  );
};

export default Mural;
