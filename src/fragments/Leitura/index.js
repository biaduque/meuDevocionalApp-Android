import React, {useEffect, useRef} from 'react';
import {Animated, SafeAreaView, Platform, Dimensions} from 'react-native';
import {Container, Layout, WrapperContent} from './styles';
import LeiturasRapidas from './LeiturasRapidas';
import Cotidiano from './Cotidiano';
import Header from '../../components/Header';
import {SafeAreaProvider} from 'react-native-safe-area-context/src/SafeAreaContext';
import Utils from '../../common/Utils';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;

const LeituraScreen = () => {
  const utils = new Utils();
  const offset = useRef(new Animated.Value(0)).current;
  const opacityBigTitle = new Animated.Value(0);
  const opacitySmallTitle = new Animated.Value(0);

  const onScroll = e => {
    const scrollY = parseInt(e.nativeEvent.contentOffset.y, 10);
    handleToggleBigTitle(scrollY);

    Animated.event([{nativeEvent: {contentOffset: {y: offset}}}], {
      useNativeDriver: false,
    })(e);
  };

  function handleToggleBigTitle(scrollY) {
    if (scrollY > 50) {
      utils.changeDynamicAnimation(opacityBigTitle, 1);
      utils.changeDynamicAnimation(opacitySmallTitle, 1);
    } else {
      utils.changeDynamicAnimation(opacityBigTitle, 0);
      utils.changeDynamicAnimation(opacitySmallTitle, 0);
    }
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}} forceInset={{top: 'always'}}>
        <Layout>
          <Header
            animatedValue={offset}
            title={'Leituras'}
            showPlusButton={false}
            animatedOpacityBigTitle={opacityBigTitle}
            animatedOpacitySmallTitle={opacitySmallTitle}
          />
          <Animated.ScrollView
            style={{flex: 1}}
            contentContainerStyle={{
              alignItems: 'center',
              paddingTop: 220,
            }}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={e => onScroll(e)}>
            <Container>
              <WrapperContent>
                <LeiturasRapidas />
                <Cotidiano />
                <LeiturasRapidas />
                <Cotidiano />
                <LeiturasRapidas />
                <Cotidiano />
                <LeiturasRapidas />
              </WrapperContent>
            </Container>
          </Animated.ScrollView>
        </Layout>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export {LeituraScreen};
