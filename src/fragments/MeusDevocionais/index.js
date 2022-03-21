import React, {createRef, useEffect, useState} from 'react';
import {Container, FlatList, Layout} from './styles';
import DevotionalsComponent from './Devotionals';
import {Animated, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import LocalRepositoryService from '../../services/LocalRepositoryService';
import {setMyDevotionals} from '../../store/actions/mydevotionals.action';
import Utils from '../../common/utils';
import BooksImage from '../../assets/illustrations/crieBase2.png';
import {
  Button,
  Description,
  Image,
  LayoutEmpty,
  TextButton,
  Title,
} from '../../components/EmptyState/styles';
import {Loading} from '../../components/Loading/styles';

const MyDevotionalsScreen = ({navigation}) => {
  const utils = new Utils();
  const dispatch = useDispatch();

  const scrollRef = createRef();
  const $app = useSelector(state => state.app);
  const $myDevotionals = useSelector(state => state.myDevotionals);
  const [devotionals, setDevotionals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getDevotionals() {
      if ($myDevotionals.devotionals && $myDevotionals.devotionals.length > 0) {
        const assertedArray = utils.assertArray(
          $myDevotionals.devotionals,
          'createdAt',
        );
        setDevotionals(assertedArray);
        setLoading(false);
      } else {
        try {
          const repositoryService = new LocalRepositoryService();
          const data = await repositoryService.get(
            repositoryService.DEVOCIONAL_LIST_KEY,
            true,
          );

          if (data != null) {
            dispatch(setMyDevotionals(data));
            const assertedArray = utils.assertArray(data, 'createdAt');
            setDevotionals(assertedArray);
            setLoading(false);
          } else {
            setDevotionals([]);
            setLoading(false);
          }
        } catch (e) {
          console.log('Não há dados salvos');
          setDevotionals([]);
          setLoading(false);
        }
      }
    }

    getDevotionals();

    return () => {
      setDevotionals([]);
    };
  }, [$myDevotionals]);

  const onScroll = e => {
    Animated.event([{nativeEvent: {contentOffset: {y: $app.offset}}}], {
      useNativeDriver: false,
    })(e);
  };

  const navigateTo = path => {
    navigation.navigate(path);
  };

  return (
    <Layout>
      {loading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Loading />
        </View>
      ) : (
        <Container>
          {devotionals.length <= 0 ? (
            <LayoutEmpty>
              <Image source={BooksImage} />
              <Title>Você ainda não possui nenhuma devocional.</Title>
              <Description>Que tal criar uma para começar?</Description>
              <Button onPress={() => navigateTo('CreateDevotional')}>
                <TextButton>Criar devocional</TextButton>
              </Button>
            </LayoutEmpty>
          ) : (
            <FlatList
              contentContainerStyle={{
                paddingTop: 260,
                paddingBottom: 120,
              }}
              ref={scrollRef}
              showsVerticalScrollIndicator={false}
              scrollEventThrottle={16}
              onScroll={e => onScroll(e)}
              data={devotionals}
              renderItem={({item}) => (
                <DevotionalsComponent devotional={item} />
              )}
            />
          )}
        </Container>
      )}
    </Layout>
  );
};

export default MyDevotionalsScreen;
