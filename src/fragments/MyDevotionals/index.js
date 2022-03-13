import React, {useEffect, useRef, useState} from 'react';
import {Container, FlatList, FloatingButtonCreate, Layout} from './styles';
import DevotionalsComponent from './Devotionals';
import Header from '../../components/Header';
import {Animated, Vibration} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import LocalRepositoryService from '../../services/LocalRepositoryService';
import {setMyDevotionals} from '../../store/actions/mydevotionals.action';
import ModalDeleteSheet from '../../screens/Devocional/View/ModalDeleteSheet';
import Utils from '../../common/Utils';
import {Plus} from 'react-native-iconly';
import {PlusIcon} from '../../components/Header/styles';

const MyDevotionalsScreen = () => {
  const utils = new Utils();
  const dispatch = useDispatch();

  const offset = useRef(new Animated.Value(0)).current;
  const opacityBigTitle = new Animated.Value(0);
  const opacitySmallTitle = new Animated.Value(0);

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

  const onScroll = e => {
    const scrollY = parseInt(e.nativeEvent.contentOffset.y, 10);
    handleToggleBigTitle(scrollY);

    Animated.event([{nativeEvent: {contentOffset: {y: offset}}}], {
      useNativeDriver: false,
    })(e);
  };

  function handleToggleBigTitle(scrollY) {
    if (scrollY > 50) {
      utils.changeDynamicAnimation(opacityBigTitle, 1);
      utils.changeDynamicAnimation(opacitySmallTitle, 1);
    } else {
      utils.changeDynamicAnimation(opacityBigTitle, 0);
      utils.changeDynamicAnimation(opacitySmallTitle, 0);
    }
  }

  const handleOpenModal = async devotional => {
    setOpenModalDelete(true);
    setSelectedDevotional(devotional);

    const DURATION = 100;

    Vibration.vibrate(DURATION);
  };

  const handleCloseModal = () => {
    setOpenModalDelete(false);
    setSelectedDevotional(null);
  };

  return (
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

      <FloatingButtonCreate>
        <PlusIcon />
      </FloatingButtonCreate>

      <Header
        animatedValue={offset}
        title={'Meus Devocionais'}
        animatedOpacityBigTitle={opacityBigTitle}
        animatedOpacitySmallTitle={opacitySmallTitle}
      />

      <Container>
        {devotionals.length <= 0 ? null : (
          <FlatList
            contentContainerStyle={{
              paddingTop: 220,
              paddingBottom: 60,
            }}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={e => onScroll(e)}
            data={devotionals}
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
  );
};

export default MyDevotionalsScreen;
