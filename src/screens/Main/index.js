import React, {useEffect} from 'react';
import BottomNavigation from '../../components/BottomNavigation';
import Fragments from '../../routes/fragment';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../components/Header';
import {Layout, Bar} from './styles';
import LocalRepositoryService from '../../services/LocalRepositoryService';
import {setIsLoaded} from '../../store/actions/app.action';

const Main = ({navigation}) => {
  const $app = useSelector(state => state.app);

  const repositoryService = new LocalRepositoryService();
  const dispatch = useDispatch();

  useEffect(() => {
    async function checkIsNewUser() {
      const ret = await repositoryService.get(
        repositoryService.IS_NEW_USER_KEY,
        true,
      );

      if (ret != null && ret[0].isNewUser === true) {
        // navigation.navigate('Main');
      } else {
        navigation.navigate('OnBoarding');
      }

      setTimeout(() => {
        dispatch(setIsLoaded(true));
      }, 3000);
    }

    checkIsNewUser();
  }, []);

  useEffect(() => {}, [$app]);

  return (
    <Layout>
      <Bar currentTheme={$app.theme.name} />
      <Header animatedValue={$app.offset} title={$app.activeTab} />
      <Fragments />
      <BottomNavigation />
    </Layout>
  );
};

export default Main;
