import React from 'react';
import {Animated, TouchableOpacity, View} from 'react-native';
import {Container, InfoIcon, PlusIcon} from './styles';
import {useNavigation} from '@react-navigation/core';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';

const Header = ({
  title,
  showPlusButton = true,
  animatedValue,
  animatedOpacityBigTitle,
  animatedOpacitySmallTitle,
}) => {
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
              opacity: animatedOpacitySmallTitle.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
                extrapolate: 'identity',
              }),
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
          opacity: animatedOpacityBigTitle.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
            extrapolate: 'clamp',
          }),
        }}>
        {title}
      </Animated.Text>
    </Animated.View>
  );
};

export default Header;
