import React, {useEffect} from 'react';
import BottomNavigation from '../../components/BottomNavigation';
import Fragments from '../../routes/fragment';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../components/Header';
import {Layout, Bar} from './styles';
import LocalRepositoryService from '../../services/LocalRepositoryService';
import {setIsLoaded} from '../../store/actions/app.action';
import ModalDeleteSheet from '../Devocional/View/ModalDeleteSheet';

const Main = ({navigation}) => {
  const $app = useSelector(state => state.app);

  const dispatch = useDispatch();

  useEffect(() => {
    const repositoryService = new LocalRepositoryService();

    async function checkIsNewUser() {
      try {
        const ret = await repositoryService.get(
          repositoryService.IS_NEW_USER_KEY,
          true,
        );

        if (ret == null && ret[0].isNewUser === false) {
          navigation.navigate('OnBoarding');
        }

        setTimeout(() => {
          dispatch(setIsLoaded(true));
        }, 3000);
      } catch (e) {
        console.log('Não há dados de usuário salvos');
        navigation.navigate('OnBoarding');
      }
    }

    checkIsNewUser();
  }, [dispatch, navigation]);

  useEffect(() => {}, [$app]);

  return (
    <Layout>
      <Bar currentTheme={$app.theme.name} />
      <Header animatedValue={$app.offset} title={$app.activeTab} />

      <ModalDeleteSheet
        title={'Excluir devocional?'}
        description={
          'Deseja criar uma nova devocional através dessa devocional rápida?'
        }
        titleConfirm={'Excluir devocional'}
      />

      <Fragments />

      <BottomNavigation />
    </Layout>
  );
};

export default Main;
