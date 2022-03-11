import React, {useEffect, useRef, useState} from 'react';
import {Container, FlatList, Layout} from './styles';
import DevotionalsComponent from './Devotionals';
import Header from '../../components/Header';
import {Animated, SafeAreaView} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context/src/SafeAreaContext';
import {useDispatch, useSelector} from 'react-redux';
import LocalRepositoryService from '../../services/LocalRepositoryService';
import {setMyDevotionals} from '../../store/actions/mydevotionals.action';
import ModalDeleteSheet from '../../screens/MyDevotionalView/ModalDeleteSheet';

const MyDevotionalsScreen = () => {
  const offset = useRef(new Animated.Value(0)).current;
  const dispatch = useDispatch();

  const $myDevotionals = useSelector(state => state.myDevotionals);
  const [devotionals, setDevotionals] = useState([]);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [selectedDevotional, setSelectedDevotional] = useState(null);

  useEffect(() => {
    async function getDevotionals() {
      if ($myDevotionals.devotionals && $myDevotionals.devotionals.length > 0) {
        setDevotionals($myDevotionals.devotionals);
        // dispatch(setMyDevotionals([]));
      } else {
        const repositoryService = new LocalRepositoryService();
        const data = await repositoryService.get(
          repositoryService.DEVOCIONAL_LIST_KEY,
          true,
        );

        if (data != null) {
          dispatch(setMyDevotionals(data));
          setDevotionals(data);
        }
      }
    }

    getDevotionals();

    return () => {
      setDevotionals([]);
    };
  }, [$myDevotionals]);

  const handleOpenModal = async devotional => {
    setOpenModalDelete(true);
    setSelectedDevotional(devotional);
  };

  const handleCloseModal = () => {
    setOpenModalDelete(false);
    setSelectedDevotional(null);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}} forceInset={{top: 'always'}}>
        <Layout>
          <ModalDeleteSheet
            open={openModalDelete}
            devotional={selectedDevotional}
            handleClose={handleCloseModal}
            title={'Excluir devocional?'}
            description={
              'Deseja criar uma nova devocional através dessa devocional rápida?'
            }
            titleConfirm={'Excluir devocional'}
          />

          <Header animatedValue={offset} title={'Meus Devocionais'} />

          <Container>
            {devotionals.length <= 0 ? null : (
              <FlatList
                contentContainerStyle={{paddingBottom: 40, paddingTop: 40}}
                data={devotionals}
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                  [{nativeEvent: {contentOffset: {y: offset}}}],
                  {useNativeDriver: false},
                )}
                renderItem={({item}) => (
                  <DevotionalsComponent
                    devotional={item}
                    handleOpenModalDelete={handleOpenModal}
                  />
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
