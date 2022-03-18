import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';
import {
  ActiveDotWrapper,
  Content,
  DotWrapper,
  Image,
  Layout,
  TextPresentation,
} from './styles';
import Image1 from '../../assets/illustrations/onBoarding/Onboard1.png';
import Image2 from '../../assets/illustrations/onBoarding/Onboard2.png';
import Image3 from '../../assets/illustrations/onBoarding/Onboard3.png';
import Image4 from '../../assets/illustrations/onBoarding/Onboard4.png';

const SwiperOnboarding = ({index = 0}) => {
  return (
    <Layout>
      <Swiper
        dot={<DotWrapper />}
        activeDot={<ActiveDotWrapper />}
        loop={false}
        index={index}>
        <Content>
          <Image source={Image1} />
          <TextPresentation>
            Bem vindo ao Meu Devocional, o seu espaço pessoal de leitura,
            reflexão e gratidão por sua Fé
          </TextPresentation>
        </Content>

        <Content>
          <Image source={Image2} />
          <TextPresentation>
            Leia devocionais diárias e anote suas reflexões em cada uma delas
          </TextPresentation>
        </Content>

        <Content>
          <Image source={Image3} />
          <TextPresentation>
            Crie suas próprias devocionais, adicione a referência bíblica,
            músicas e compartilhe com seus amigos
          </TextPresentation>
        </Content>

        <Content>
          <Image source={Image4} />
          <TextPresentation>
            Adicione motivos de gratidão em seu mural e transforme em widget
            para o seu telefone
          </TextPresentation>
        </Content>
      </Swiper>
    </Layout>
  );
};

export default SwiperOnboarding;
