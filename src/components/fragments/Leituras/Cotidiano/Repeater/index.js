import React from 'react';
import {FooterWrapper, Image, RefBiblia, Title, WrapperLeitura} from './styles';
import cotidianoBase1 from '../../../../../assets/illustrations/cotidianoBase1.png';
import cotidianoBase2 from '../../../../../assets/illustrations/cotidianoBase2.png';
import cotidianoBase3 from '../../../../../assets/illustrations/cotidianoBase3.png';
import cotidianoBase4 from '../../../../../assets/illustrations/cotidianoBase4.png';
import cotidianoBase5 from '../../../../../assets/illustrations/cotidianoBase5.png';

const RepeaterCotidiano = ({item}) => {
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

  return (
    <WrapperLeitura>
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

export default RepeaterCotidiano;
