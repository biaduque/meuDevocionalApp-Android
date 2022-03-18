import React, {useState} from 'react';
import {Footer, Layout, TextButton} from './styles';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import LocalRepositoryService from '../../services/LocalRepositoryService';
import SwiperOnboarding from '../../components/SwiperOnboarding';
import {Bar} from '../Main/styles';
import {useSelector} from 'react-redux';

const OnBoardingScreen = ({navigation}) => {
  const repositoryService = new LocalRepositoryService();
  const $app = useSelector(state => state.app);
  const [index, setIndex] = useState(0);

  const nextItem = () => {
    setIndex(prevState => prevState + 1);
  };

  const backItem = () => {
    if (index > 0) {
      setIndex(prevState => prevState - 1);
    }
  };

  async function goToHome() {
    navigation.reset({
      index: 0,
      routes: [{name: 'Main'}],
    });

    await repositoryService.replaceAll(
      repositoryService.IS_NEW_USER_KEY,
      {id: 1, isNewUser: true},
      true,
    );
  }

  return (
    <Layout>
      <Bar currentTheme={$app.theme.name} />
      <SwiperOnboarding index={index} />

      <Footer>
        {index > 0 ? (
          <TouchableOpacity onPress={() => backItem()}>
            <TextButton>Anterior</TextButton>
          </TouchableOpacity>
        ) : (
          <View />
        )}

        {index >= 3 ? (
          <TouchableOpacity onPress={() => goToHome()}>
            <TextButton>Ok</TextButton>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => nextItem()}>
            <TextButton>Próximo</TextButton>
          </TouchableOpacity>
        )}
      </Footer>
    </Layout>
  );
};

export default OnBoardingScreen;
