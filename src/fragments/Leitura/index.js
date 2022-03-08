import React from 'react';
import {Container, WrapperContent} from './styles';
import TopContent from '../../components/TopContent';
import {ScrollView} from 'react-native';
import LeiturasRapidas from '../../components/fragments/Leituras/LeiturasRapidas';
import Cotidiano from '../../components/fragments/Leituras/Cotidiano';

const LeituraScreen = () => {
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false} overScrollMode={'never'}>
        <WrapperContent>
          <TopContent title={'Leituras'} showSecondLine={false} />

          <LeiturasRapidas />
          <Cotidiano />
        </WrapperContent>
      </ScrollView>
    </Container>
  );
};

export {LeituraScreen};
