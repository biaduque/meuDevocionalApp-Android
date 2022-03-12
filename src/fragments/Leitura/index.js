import React, {createRef, forwardRef, useEffect, useRef} from 'react';
import {Animated, ScrollView} from 'react-native';
import {Container, CustomScrollView, Layout, WrapperContent} from './styles';
import LeiturasRapidas from './LeiturasRapidas';
import Cotidiano from './Cotidiano';
import Header from '../../components/Header';

const LeituraScreen = () => {
  const headerRef = createRef(Header);
  let headerScrollNotified = false;
  const scrollY = new Animated.Value(0);
  const onScrollInternal = undefined;

  useEffect(() => {
    return () => {};
  }, []);

  const setHeaderScrollPosition = scrollY => {
    if (headerRef.current && !headerScrollNotified) {
      headerRef.current.setHeaderScrollPosition(scrollY);
      headerScrollNotified = true;
    }
  };

  return (
    <Layout>
      <Header title={'Leituras'} showPlusButton={false} />
      <Animated.ScrollView>
        <Container>
          <WrapperContent>
            <LeiturasRapidas />
            <Cotidiano />
            <LeiturasRapidas />
            <Cotidiano />
            <LeiturasRapidas />
            <Cotidiano />
            <LeiturasRapidas />
            <Cotidiano />
          </WrapperContent>
        </Container>
      </Animated.ScrollView>
    </Layout>
  );
};

export {LeituraScreen};
