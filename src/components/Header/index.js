import React, {useEffect, useState} from 'react';
import {
  Animated,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Text,
} from 'react-native';
import {Container, InfoIcon, Layout, PlusIcon, TitleScreen} from './styles';
import {useNavigation} from '@react-navigation/core';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Header = ({animatedValue, title}) => {
  const screenWidth = Dimensions.get('window').width;

  const navigation = useNavigation();
  const [titleWidth, setTitleWidth] = useState(0);

  useEffect(() => {
    return () => {
      setTitleWidth(0);
    };
  }, [title]);

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
      <Container>
        <InfoIcon onPress={() => onPressInfoButton()} />

        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.navigate('CreateDevotional')}>
          <PlusIcon />
        </TouchableOpacity>
      </Container>

      <Animated.View
        style={[
          styles.header,
          {
            paddingHorizontal: screenWidth * 0.05,
            width: screenWidth,
            height: animatedValue.interpolate({
              inputRange: [0, 200],
              outputRange: [70, 54],
              extrapolate: 'clamp',
            }),
          },
        ]}>
        <Animated.Text
          onLayout={e => {
            let width = e.nativeEvent.layout.width;
            setTitleWidth(width);
          }}
          style={{
            fontWeight: 'bold',
            fontSize: animatedValue.interpolate({
              inputRange: [0, 200],
              outputRange: [36, 20],
              extrapolate: 'clamp',
            }),
          }}>
          {title}
        </Animated.Text>
        <Animated.View
          style={{
            width: animatedValue.interpolate({
              inputRange: [0, 200],
              outputRange: [screenWidth * 0.9 - titleWidth, 0],
              extrapolate: 'clamp',
            }),
          }}
        />
      </Animated.View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingBottom: 20,
  },
});

export default Header;
