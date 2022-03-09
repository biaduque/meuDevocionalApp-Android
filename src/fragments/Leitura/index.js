import React, {useRef} from 'react';
import {ScrollView, Animated, SafeAreaView} from 'react-native';
import {Container, CustomScrollView, WrapperContent} from './styles';
import LeiturasRapidas from '../../components/fragments/Leituras/LeiturasRapidas';
import Cotidiano from '../../components/fragments/Leituras/Cotidiano';
import {SafeAreaProvider} from 'react-native-safe-area-context/src/SafeAreaContext';
import Header from '../../components/Header';

const LeituraScreen = () => {
  const offset = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}} forceInset={{top: 'always'}}>
        <Header animatedValue={offset} title={'Leituras'} />

        <CustomScrollView
          contentContainerStyle={{
            alignItems: 'center',
            paddingTop: 100,
          }}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: offset}}}],
            {useNativeDriver: false},
          )}>
          <Container>
            <WrapperContent>
              <LeiturasRapidas />
              <Cotidiano />
            </WrapperContent>
          </Container>
        </CustomScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export {LeituraScreen};
