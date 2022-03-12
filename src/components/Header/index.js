import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Container, InfoIcon, Layout, PlusIcon, TitleScreen} from './styles';
import {useNavigation} from '@react-navigation/core';

const Header = ({title, showPlusButton = true}) => {
  const navigation = useNavigation();

  const onPressInfoButton = () => {
    switch (title) {
      case 'Leitura':
        break;
      case 'Meus Devocionais':
        navigation.navigate('InfoMyDevotional');
        break;
    }
  };

  return (
    <Layout>
      <TitleScreen>{title}</TitleScreen>

      <Container>
        <InfoIcon onPress={() => onPressInfoButton()} />

        {showPlusButton && (
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigation.navigate('CreateDevotional')}>
            <PlusIcon />
          </TouchableOpacity>
        )}
      </Container>
    </Layout>
  );
};

export default Header;
