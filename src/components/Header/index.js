import React from 'react';
import {Animated, TouchableOpacity, View} from 'react-native';
import {
  BackdropBackground,
  Container,
  InfoIcon,
  PlusIcon,
  SearchIcon,
  TitleScreen,
} from './styles';
import {useNavigation} from '@react-navigation/core';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {BlurView} from '@react-native-community/blur';

const Header = ({title, animatedValue}) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const $app = useSelector(state => state.app);
  const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

  const HEADER_HEIGHT = 200;
  const headerHeight = animatedValue.interpolate({
    inputRange: [0, HEADER_HEIGHT + insets.top],
    outputRange: [HEADER_HEIGHT + insets.top, insets.top + 63],
    extrapolate: 'clamp',
  });

  const verifyTitlePlusButton = () => {
    switch (title) {
      case 'Leituras':
        return false;
      case 'Meus Devocionais':
        return true;
      case 'Mural':
        return true;
    }
  };

  const verifyTitleSearchButton = () => {
    switch (title) {
      case 'Leituras':
        return false;
      case 'Meus Devocionais':
        return true;
      case 'Mural':
        return false;
    }
  };

  const onPressInfoButton = () => {
    switch (title) {
      case 'Leituras':
        break;
      case 'Meus Devocionais':
        navigation.navigate('InfoGeneric');
        break;
      case 'Mural':
        navigation.navigate('InfoGeneric');
        break;
    }
  };

  const navigateToCreate = () => {
    switch (title) {
      case 'Meus Devocionais':
        navigation.navigate('CreateDevotional');
        break;
      case 'Mural':
        navigation.navigate('CreateMural');
        break;
    }
  };

  const navigateTo = path => {
    navigation.navigate(path);
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
        inputRange: [
          0,
          HEADER_HEIGHT + insets.top - 120,
          HEADER_HEIGHT + insets.top - 30,
        ],
        outputRange: [0, 0, 1],
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
      <AnimatedBlurView
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          zIndex: -1,
          opacity: fadeIn().opacity,
        }}
        blurType="dark"
        blurAmount={10}
        blurRadius={10}
        overlayColor={'transparent'}
        reducedTransparencyFallbackColor="black"
      />
      <BackdropBackground />
      <Container>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <InfoIcon onPress={() => onPressInfoButton()} />
          <Animated.Text
            style={{
              fontSize: 24,
              marginLeft: 20,
              color: $app.theme.colors.titlePrimary,
              opacity: fadeIn().opacity,
            }}>
            {title}
          </Animated.Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {verifyTitleSearchButton() && (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => navigateTo('SearchDevocionais')}>
              <SearchIcon />
            </TouchableOpacity>
          )}

          {verifyTitlePlusButton() && (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => navigateToCreate()}>
              <PlusIcon />
            </TouchableOpacity>
          )}
        </View>
      </Container>

      <TitleScreen
        style={{
          opacity: fadeOut().opacity,
          marginTop: 36,
        }}>
        {title}
      </TitleScreen>
    </Animated.View>
  );
};

export default Header;
