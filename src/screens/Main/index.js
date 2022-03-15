import React, {useEffect} from 'react';
import BottomNavigation from '../../components/BottomNavigation';
import Fragments from '../../routes/fragment';
import {useSelector} from 'react-redux';
import Header from '../../components/Header';
import {Layout, Bar} from './styles';

const Main = () => {
  const $app = useSelector(state => state.app);

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
