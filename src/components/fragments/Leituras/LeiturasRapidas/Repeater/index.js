import React from 'react';
import {
  Description,
  FooterWrapper,
  RefBiblia,
  Title,
  WrapperLeitura,
} from './styles';
import {useNavigation} from '@react-navigation/core';
import {TouchableOpacity} from 'react-native';

const RepeaterQuickReader = ({item}) => {
  const navigation = useNavigation();

  const formattedDescription = () => {
    return item.descricao.length < 100
      ? item.descricao
      : `${item.descricao.substring(0, 94)}...`;
  };

  return (
    <WrapperLeitura onPress={() => navigation.navigate('VerLeituraRapida')}>
      <Description>{formattedDescription()}</Description>

      <FooterWrapper>
        <Title>{item.titulo}</Title>
        <RefBiblia>{item.ref}</RefBiblia>
      </FooterWrapper>
    </WrapperLeitura>
  );
};

export default RepeaterQuickReader;
