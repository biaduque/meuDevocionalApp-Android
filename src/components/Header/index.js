import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Container, Layout} from './styles';
import {Plus, Search} from 'react-native-iconly';
import {useNavigation} from '@react-navigation/core';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Header = () => {
  const navigation = useNavigation();

  const handleNavigateToSearch = () => {
    navigation.navigate('Search');
  };

  return (
    <Layout>
      <Container>
        <Search color="#000" onPress={() => handleNavigateToSearch()} />

        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.navigate('Profile')}>
          <AntDesign name="plus" size={24} color="#999" />
        </TouchableOpacity>
      </Container>
    </Layout>
  );
};

export default Header;
