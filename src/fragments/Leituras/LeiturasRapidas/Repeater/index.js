import React from 'react';
import {
  ContainerTitle,
  Description,
  FooterWrapper,
  RefBiblia,
  RightIcon,
  Title,
  WrapperLeitura,
} from './styles';
import {useNavigation} from '@react-navigation/core';

const RepeaterQuickReader = ({item}) => {
  const navigation = useNavigation();

  const formattedDescription = () => {
    return item.introducao.length < 85
      ? item.introducao
      : `${item.introducao.substring(0, 80)}...`;
  };

  const onClickLeitura = () => {
    navigation.navigate('LeiturasView', {
      parent: 'LeiturasRapidas',
      update: false,
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
        <ContainerTitle>
          <Title>{item.titulo}</Title>
          <RefBiblia>{item.refBiblica}</RefBiblia>
        </ContainerTitle>

        <RightIcon />
      </FooterWrapper>
    </WrapperLeitura>
  );
};

export default RepeaterQuickReader;
