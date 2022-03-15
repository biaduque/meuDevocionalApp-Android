import React, {useEffect, useState} from 'react';
import {Animated, ActivityIndicator, View} from 'react-native';
import {Container, Layout} from './styles';
import RepeaterMural from './Repeater';
import {useDispatch, useSelector} from 'react-redux';
import LocalRepositoryService from '../../services/LocalRepositoryService';
import {setMural} from '../../store/actions/mydevotionals.action';

const Mural = () => {
  const dispatch = useDispatch();
  const $app = useSelector(state => state.app);
  const $myDevotionals = useSelector(state => state.myDevotionals);

  const [muralLocal, setMuralLocal] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getMural() {
      if ($myDevotionals.mural && $myDevotionals.mural.length > 0) {
        setMuralLocal($myDevotionals.mural);
        setLoading(false);
      } else {
        const repositoryService = new LocalRepositoryService();
        const data = await repositoryService.get(
          repositoryService.MURAL_LIST_KEY,
          true,
        );

        if (data != null) {
          dispatch(setMural(data));
          setMuralLocal(data);
          setLoading(false);
        }
      }
    }

    getMural();

    return () => {
      setMuralLocal([]);
    };
  }, [$myDevotionals]);

  const onScroll = e => {
    Animated.event([{nativeEvent: {contentOffset: {y: $app.offset}}}], {
      useNativeDriver: false,
    })(e);
  };

  return (
    <Layout>
      {loading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size={'large'} color={'#fff'} />
        </View>
      ) : (
        <Container>
          <Animated.FlatList
            data={muralLocal}
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
        </Container>
      )}
    </Layout>
  );
};

export default Mural;
