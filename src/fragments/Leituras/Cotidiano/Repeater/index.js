import React from 'react';
import {FooterWrapper, Image, RefBiblia, Title, WrapperLeitura} from './styles';
import cotidianoBase1 from '../../../../assets/illustrations/cotidiano/cotidianoBase1.png';
import cotidianoBase2 from '../../../../assets/illustrations/cotidiano/cotidianoBase2.png';
import cotidianoBase3 from '../../../../assets/illustrations/cotidiano/cotidianoBase3.png';
import cotidianoBase4 from '../../../../assets/illustrations/cotidiano/cotidianoBase4.png';
import cotidianoBase5 from '../../../../assets/illustrations/cotidiano/cotidianoBase5.png';
import {useNavigation} from '@react-navigation/core';

const RepeaterCotidiano = ({item}) => {
  const navigation = useNavigation();

  const transformImageBackground = path => {
    if (path.includes('cotidianoBase1')) {
      return cotidianoBase1;
    } else if (path.includes('cotidianoBase2')) {
      return cotidianoBase2;
    } else if (path.includes('cotidianoBase3')) {
      return cotidianoBase3;
    } else if (path.includes('cotidianoBase4')) {
      return cotidianoBase4;
    } else if (path.includes('cotidianoBase5')) {
      return cotidianoBase5;
    } else {
      return cotidianoBase1;
    }
  };

  const onClickItem = () => {
    navigation.navigate('LeiturasView', {
      parent: 'Cotidiano',
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

      <FooterWrapper>
        <Title>
          {item.titulo.length < 30
            ? item.titulo
            : item.titulo.substring(0, 24) + '...'}
        </Title>
        <RefBiblia>{item.baseBiblica}</RefBiblia>
      </FooterWrapper>
    </WrapperLeitura>
  );
};

export default RepeaterCotidiano;
