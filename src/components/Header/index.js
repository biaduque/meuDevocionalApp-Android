import React from 'react';
import {Animated, TouchableOpacity} from 'react-native';
import {Container, InfoIcon, Layout, PlusIcon, TitleScreen} from './styles';
import {useNavigation} from '@react-navigation/core';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Header = ({animatedValue, title}) => {
  const navigation = useNavigation();

  const HEADER_HEIGHT = 110;
  const insets = useSafeAreaInsets();

  const headerHeight = animatedValue.interpolate({
    inputRange: [0, HEADER_HEIGHT + insets.top],
    outputRange: [HEADER_HEIGHT + insets.top, insets.top + 44],
    extrapolate: 'clamp',
  });

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
          <InfoIcon onPress={() => onPressInfoButton()} />

          <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigation.navigate('CreateDevotional')}>
            <PlusIcon />
          </TouchableOpacity>
        </Container>

        <TitleScreen>{title}</TitleScreen>
      </Layout>
    </Animated.View>
  );
};

export default Header;
