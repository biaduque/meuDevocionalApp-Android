import React from 'react';
import {FooterWrapper, Image, RefBiblia, Title, WrapperLeitura} from './styles';
import estudoBase1 from '../../../../assets/illustrations/estudos/estudosBase1.png';
import estudoBase2 from '../../../../assets/illustrations/estudos/estudosBase2.png';
import estudoBase3 from '../../../../assets/illustrations/estudos/estudosBase3.png';
import estudoBase4 from '../../../../assets/illustrations/estudos/estudosBase4.png';
import estudoBase5 from '../../../../assets/illustrations/estudos/estudosBase5.png';
import {useNavigation} from '@react-navigation/core';

const RepeaterEstudos = ({item}) => {
  const navigation = useNavigation();

  const transformImageBackground = path => {
    if (path.includes('estudosBase1')) {
      return estudoBase1;
    } else if (path.includes('estudosBase2')) {
      return estudoBase2;
    } else if (path.includes('estudosBase3')) {
      return estudoBase3;
    } else if (path.includes('estudosBase4')) {
      return estudoBase4;
    } else if (path.includes('estudosBase5')) {
      return estudoBase5;
    } else {
      return estudoBase1;
    }
  };

  const onClickItem = () => {
    navigation.navigate('LeiturasView', {
      parent: 'Estudos',
      id: item.id,
      titulo: item.titulo,
      introducao: item.introducao,
      desenvolvimento: item.contextualizacao,
      reflexao: item.reflexao,
      conclusao: item.conclusao,
      refBiblica: item.baseBiblica,
      musica: item.musica,
    });
  };

  return (
    <WrapperLeitura onPress={() => onClickItem()}>
      <Image
        fromWeb={false}
        source={transformImageBackground(item.backgroundImage)}
      />

      <FooterWrapper>
        <Title>{item.titulo}</Title>
        <RefBiblia>{item.baseBiblica}</RefBiblia>
      </FooterWrapper>
    </WrapperLeitura>
  );
};

export default RepeaterEstudos;
