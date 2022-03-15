import React, {useEffect, useState} from 'react';
import {Star} from 'react-native-iconly';
import {BackdropBackground, Button, Container, Layout, Text} from './styles';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/core';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import {setActiveTab} from '../../store/actions/app.action';

const BottomNavigation = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const $app = useSelector(state => state.app);

  const [selectedRoute, setSelectedRoute] = useState('Leituras');

  useEffect(() => {
    if (route?.params?.screen) {
      const selectedScreen = route.params.screen;
      setSelectedRoute(selectedScreen);
    }

    return () => {
      setSelectedRoute('Leituras');
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
  const isSelectedColor = path =>
    isSelected(path) ? $app.theme.colors.accent : '#999';

  return (
    <Layout>
      <BackdropBackground />

      <Container>
        <Button onPress={() => handleChooseFragment('Leituras')}>
          <Feather
            name="book-open"
            size={24}
            color={isSelectedColor('Leituras')}
            filled={isSelected('Leituras')}
          />
          <Text color={isSelectedColor('Leituras')}>Leituras</Text>
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
