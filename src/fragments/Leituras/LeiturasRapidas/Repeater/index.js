import React from 'react';
import {Dimensions} from 'react-native';
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
  const widthScreen = Dimensions.get('window').width;

  const formattedDescription = () => {
    if (widthScreen > 415) {
      return item.introducao.length < 85
        ? item.introducao
        : `${item.introducao.substring(0, 80)}...`;
    }

    return item.introducao.length < 85
      ? item.introducao
      : `${item.introducao.substring(0, 70)}...`;
  };

  const formattedTitle = value => {
    if (widthScreen > 415) {
      return value.length < 30 ? value : `${value.substring(0, 30)}...`;
    }

    return value.length < 18 ? value : `${value.substring(0, 16)}...`;
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
          <Title>{formattedTitle(item.titulo)}</Title>
          <RefBiblia>{item.refBiblica}</RefBiblia>
        </ContainerTitle>

        <RightIcon />
      </FooterWrapper>
    </WrapperLeitura>
  );
};

export default RepeaterQuickReader;
