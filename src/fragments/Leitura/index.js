import React from 'react';
import {Animated, SafeAreaView} from 'react-native';
import {Container, Layout, WrapperContent} from './styles';
import LeiturasRapidas from './LeiturasRapidas';
import Cotidiano from './Cotidiano';
import {SafeAreaProvider} from 'react-native-safe-area-context/src/SafeAreaContext';
import {useSelector} from 'react-redux';

const LeituraScreen = () => {
  const $app = useSelector(state => state.app);

  const onScroll = e => {
    Animated.event([{nativeEvent: {contentOffset: {y: $app.offset}}}], {
      useNativeDriver: false,
    })(e);
  };

  return (
    <Layout>
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
  );
};

export {LeituraScreen};
