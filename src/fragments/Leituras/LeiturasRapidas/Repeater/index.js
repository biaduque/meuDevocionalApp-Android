import React from 'react';
import {
  Description,
  FooterWrapper,
  RefBiblia,
  Title,
  WrapperLeitura,
} from './styles';
import {useNavigation} from '@react-navigation/core';

const RepeaterQuickReader = ({item}) => {
  const navigation = useNavigation();

  const formattedDescription = () => {
    return item.introducao.length < 100
      ? item.introducao
      : `${item.introducao.substring(0, 94)}...`;
  };

  const onClickLeitura = () => {
    navigation.navigate('LeiturasView', {
      parent: 'LeiturasRapidas',
      id: item.id,
      titulo: item.titulo,
      introducao: item.introducao,
      desenvolvimento: item.desenvolvimento,
      reflexao: item.reflexao,
      conclusao: item.conclusao,
      refBiblica: item.refBiblica,
      musica: item.musica,
    });
  };

  return (
    <WrapperLeitura
      background={item.backgroundColor}
      onPress={() => onClickLeitura()}>
      <Description>{formattedDescription()}</Description>

      <FooterWrapper>
        <Title>{item.titulo}</Title>
        <RefBiblia>{item.refBiblica}</RefBiblia>
      </FooterWrapper>
    </WrapperLeitura>
  );
};

export default RepeaterQuickReader;