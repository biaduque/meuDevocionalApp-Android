import React from 'react';
import {Animated, Dimensions, TouchableOpacity, View} from 'react-native';
import {Container, InfoIcon, PlusIcon} from './styles';
import {useNavigation} from '@react-navigation/core';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';

const Header = ({title, showPlusButton = true, animatedValue}) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const $app = useSelector(state => state.app);

  const HEADER_HEIGHT = 200;
  const headerHeight = animatedValue.interpolate({
    inputRange: [0, HEADER_HEIGHT + insets.top],
    outputRange: [HEADER_HEIGHT + insets.top, insets.top + 44],
    extrapolate: 'clamp',
  });

  const onPressInfoButton = () => {
    switch (title) {
      case 'Leituras':
        break;
      case 'Meus Devocionais':
        navigation.navigate('InfoMyDevotional');
        break;
    }
  };

  const fadeOut = () => {
    return {
      opacity: animatedValue.interpolate({
        inputRange: [0, HEADER_HEIGHT - 100],
        outputRange: [1, 0],
      }),
    };
  };

  const fadeIn = () => {
    return {
      opacity: animatedValue.interpolate({
        inputRange: [0, HEADER_HEIGHT + insets.top - 30],
        outputRange: [0, 1],
      }),
    };
  };

  return (
    <Animated.View
      style={{
        height: headerHeight,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Container>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <InfoIcon onPress={() => onPressInfoButton()} />
          <Animated.Text
            style={{
              fontSize: 24,
              marginLeft: 20,
              color: $app.theme.colors.titlePrimary,
              opacity: fadeIn(0).opacity,
            }}>
            {title}
          </Animated.Text>
        </View>

        {showPlusButton && (
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigation.navigate('CreateDevotional')}>
            <PlusIcon />
          </TouchableOpacity>
        )}
      </Container>

      <Animated.Text
        style={{
          fontSize: 36,
          marginRight: 'auto',
          marginLeft: 'auto',
          color: $app.theme.colors.titlePrimary,
          marginTop: 10,
          opacity: fadeOut(0).opacity,
        }}>
        {title}
      </Animated.Text>
    </Animated.View>
  );
};

export default Header;
