import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';
import {Container, Layout, WrapperContent} from './styles';
import LeiturasRapidas from './LeiturasRapidas';
import Cotidiano from './Cotidiano';
import VidaComDeus from './VidaComDeus';
import Estudos from './Estudos';
import {useSelector} from 'react-redux';

const LeituraScreen = ({navigation}) => {
  const $app = useSelector(state => state.app);
  const scrollRef = useRef(null);

  const onScroll = e => {
    Animated.event([{nativeEvent: {contentOffset: {y: $app.offset}}}], {
      useNativeDriver: false,
    })(e);
  };

  useEffect(() => {
    navigation.addListener('focus', () => {
      scrollRef.current.scrollTo({x: 0, y: 0, animated: false});
    });

    return () => {
      navigation.removeListener('focus');
    };
  }, [navigation]);

  return (
    <Layout>
      <Animated.ScrollView
        style={{flex: 1}}
        contentContainerStyle={{
          alignItems: 'center',
          paddingTop: 220,
          paddingBottom: 120,
        }}
        ref={scrollRef}
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
