import React from 'react';
import {Animated} from 'react-native';
import {Container, Layout, WrapperContent} from './styles';
import LeiturasRapidas from './LeiturasRapidas';
import Cotidiano from './Cotidiano';
import {useSelector} from 'react-redux';
import VidaComDeus from './VidaComDeus';
import Estudos from './Estudos';

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
          paddingBottom: 120,
        }}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={e => onScroll(e)}>
        <Container>
          <WrapperContent>
            <LeiturasRapidas />
            <Cotidiano />
            <VidaComDeus />
            <Estudos />
          </WrapperContent>
        </Container>
      </Animated.ScrollView>
    </Layout>
  );
};

export {LeituraScreen};
