import React from 'react';
import {
  Description,
  FooterWrapper,
  RefBiblia,
  Title,
  WrapperLeitura,
} from './styles';

const RepeaterQuickReader = ({item}) => {
  const formattedDescription = () => {
    return item.descricao.length < 100
      ? item.descricao
      : `${item.descricao.substring(0, 94)}...`;
  };

  return (
    <WrapperLeitura>
      <Description>{formattedDescription()}</Description>

      <FooterWrapper>
        <Title>{item.titulo}</Title>
        <RefBiblia>{item.ref}</RefBiblia>
      </FooterWrapper>
    </WrapperLeitura>
  );
};

export default RepeaterQuickReader;
