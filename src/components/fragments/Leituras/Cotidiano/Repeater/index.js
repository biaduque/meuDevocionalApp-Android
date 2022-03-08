import React from 'react';
import {FooterWrapper, Image, RefBiblia, Title, WrapperLeitura} from './styles';
import CotidianoBase1 from '../../../../../assets/illustrations/cotidianoBase1.png';

const RepeaterCotidiano = ({item}) => {
  const formattedDescription = () => {
    return item.descricao.length < 100
      ? item.descricao
      : `${item.descricao.substring(0, 94)}...`;
  };

  return (
    <WrapperLeitura>
      <Image source={CotidianoBase1} />

      <FooterWrapper>
        <Title>{item.titulo}</Title>
        <RefBiblia>{item.ref}</RefBiblia>
      </FooterWrapper>
    </WrapperLeitura>
  );
};

export default RepeaterCotidiano;
