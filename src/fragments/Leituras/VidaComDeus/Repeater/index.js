import React from 'react';
import {FooterWrapper, Image, RefBiblia, Title, WrapperLeitura} from './styles';
import vidaBase1 from '../../../../assets/illustrations/vida/vidaBase1.png';
import vidaBase2 from '../../../../assets/illustrations/vida/vidaBase2.png';
import vidaBase3 from '../../../../assets/illustrations/vida/vidaBase3.png';
import vidaBase4 from '../../../../assets/illustrations/vida/vidaBase4.png';
import vidaBase5 from '../../../../assets/illustrations/vida/vidaBase5.png';
import vidaBase6 from '../../../../assets/illustrations/vida/vidaBase6.png';
import {useNavigation} from '@react-navigation/core';

const RepeaterVidaComDeus = ({item}) => {
  const navigation = useNavigation();

  const transformImageBackground = path => {
    if (path.includes('vidaBase1')) {
      return vidaBase1;
    } else if (path.includes('vidaBase2')) {
      return vidaBase2;
    } else if (path.includes('vidaBase3')) {
      return vidaBase3;
    } else if (path.includes('vidaBase4')) {
      return vidaBase4;
    } else if (path.includes('vidaBase5')) {
      return vidaBase5;
    } else if (path.includes('vidaBase6')) {
      return vidaBase6;
    } else {
      return vidaBase1;
    }
  };

  const onClickItem = () => {
    navigation.navigate('LeiturasView', {
      parent: 'VidaComDeus',
      id: item.id,
      titulo: item.titulo,
      introducao: item.introducao,
      desenvolvimento: item.contextualizacao,
      reflexao: item.reflexao,
      conclusao: item.conclusao,
      refBiblica: item.baseBiblica,
      storyImage: item.storyImage,
      musica: item.link,
    });
  };

  return (
    <WrapperLeitura onPress={() => onClickItem()}>
      <Image
        fromWeb={false}
        source={transformImageBackground(item.backgroundImage)}
      />

      <FooterWrapper background={'#485F50'}>
        <Title>{item.titulo}</Title>
        <RefBiblia>{item.baseBiblica}</RefBiblia>
      </FooterWrapper>
    </WrapperLeitura>
  );
};

export default RepeaterVidaComDeus;
