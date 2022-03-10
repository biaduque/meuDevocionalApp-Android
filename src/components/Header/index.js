import React from 'react';
import {Animated, TouchableOpacity} from 'react-native';
import {Container, Layout, TitleScreen} from './styles';
import {Search} from 'react-native-iconly';
import {useNavigation} from '@react-navigation/core';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BlurView, VibrancyView} from '@react-native-community/blur';

const Header = ({animatedValue, title}) => {
  const navigation = useNavigation();

  const handleNavigateToSearch = () => {
    navigation.navigate('Search');
  };

  const HEADER_HEIGHT = 110;
  const insets = useSafeAreaInsets();

  const headerHeight = animatedValue.interpolate({
    inputRange: [0, HEADER_HEIGHT + insets.top],
    outputRange: [HEADER_HEIGHT + insets.top, insets.top + 44],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        height: headerHeight,
      }}>
      <Layout>
        <Container>
          <AntDesign name="infocirlceo" size={20} color="#999" />

          <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigation.navigate('CreateDevotional')}>
            <AntDesign name="plus" size={20} color="#999" />
          </TouchableOpacity>
        </Container>

        <TitleScreen>{title}</TitleScreen>
      </Layout>
    </Animated.View>
  );
};

export default Header;
