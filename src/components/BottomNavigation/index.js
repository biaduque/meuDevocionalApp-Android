import React, {useEffect, useState} from 'react';
import {Activity, Bookmark, Star} from 'react-native-iconly';
import {Button, Container, Layout, Text} from './styles';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/core';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {useDispatch} from 'react-redux';
import {setActiveTab} from '../../store/actions/app.action';

const BottomNavigation = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [selectedRoute, setSelectedRoute] = useState('Leitura');

  useEffect(() => {
    if (route?.params?.screen) {
      const selectedScreen = route.params.screen;
      setSelectedRoute(selectedScreen);
    }

    return () => {
      setSelectedRoute('Leitura');
    };
  }, [route]);

  const handleChooseFragment = path => {
    let nameTab = path;
    if (path === 'MyDevotionals') {
      nameTab = 'Meus Devocionais';
    }

    dispatch(setActiveTab(nameTab));
    navigation.navigate('Main', {
      screen: path,
    });
  };

  const isSelected = path => selectedRoute === path;
  const isSelectedColor = path => (isSelected(path) ? '#5d7465' : '#999');

  return (
    <Layout>
      <Container>
        <Button onPress={() => handleChooseFragment('Leitura')}>
          <Feather
            name="book-open"
            size={24}
            color={isSelectedColor('Leitura')}
            filled={isSelected('Leitura')}
          />
          <Text color={isSelectedColor('Leitura')}>Leituras</Text>
        </Button>

        <Button onPress={() => handleChooseFragment('MyDevotionals')}>
          <FontAwesome
            name={'list-alt'}
            size={22}
            color={isSelectedColor('MyDevotionals')}
            filled={isSelected('MyDevotionals')}
          />
          <Text color={isSelectedColor('MyDevotionals')}>Meus Devocionais</Text>
        </Button>

        <Button onPress={() => handleChooseFragment('Mural')}>
          <Star set={'curved'} color={isSelectedColor('Mural')} />
          <Text color={isSelectedColor('Mural')}>Mural</Text>
        </Button>
      </Container>
    </Layout>
  );
};

export default BottomNavigation;
