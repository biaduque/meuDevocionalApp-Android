import React from 'react';
import {
  Description,
  Image,
  Layout,
  Title,
  WrapperBottom,
  WrapperButton,
  WrapperWelcome,
} from './styles';
import {StatusBar, View} from 'react-native';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/core';

const OnBoardingScreen = () => {
  const navigation = useNavigation();

  function onPress() {
    navigation.reset({
      index: 0,
      routes: [{name: 'Main'}],
    });
  }

  return (
    <Layout>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#cbe5d1'} />
      <WrapperWelcome>
        <Image
          resizeMode={'contain'}
          source={require('../../assets/onboarding-image.png')}
        />
      </WrapperWelcome>

      <WrapperBottom>
        <View>
          <Title>Não deixe de realizar seu devocional diário</Title>
          <Description>
            Aqui você consegue fazer tudo de forma rápida, simples e (palavra
            que esqueci o nome)
          </Description>
        </View>

        <Button
          buttonStyles={{
            backgroundColor: '#212121',
            borderColor: '#cbe5d1',
            paddingVertical: 16,
            paddingHorizontal: 10,
            marginTop: 40,
          }}
          textStyles={{color: '#fff'}}
          title={'Começar'}
          onPress={onPress}
        />
      </WrapperBottom>
    </Layout>
  );
};

export default OnBoardingScreen;
