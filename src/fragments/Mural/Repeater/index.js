import React from 'react';
import {View} from 'react-native';
import {CreatedAt, Layout, LayoutImageBackground, Title} from './styles';
import Utils from '../../../common/utils';
import moment from 'moment';

const RepeaterMural = ({item, theme}) => {
  const parseColors = () => {
    const utils = new Utils();
    return utils.transformDataColor(item.backgroundColor, theme);
  };

  return item.backgroundImage != null ? (
    <Layout backgroundColor={parseColors().background}>
      <LayoutImageBackground source={{uri: item.backgroundImage}} />
      <View />
      <Title background={parseColors().background} color={parseColors().titulo}>
        {item.titulo}
      </Title>
      <CreatedAt
        background={parseColors().background}
        color={parseColors().titulo}>
        {moment(item.createdAt, 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY')}
      </CreatedAt>
    </Layout>
  ) : (
    <Layout backgroundColor={parseColors().background}>
      <View />
      <Title background={parseColors().background} color={parseColors().titulo}>
        {item.titulo}
      </Title>
      <CreatedAt
        background={parseColors().background}
        color={parseColors().titulo}>
        {moment(item.createdAt, 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY')}
      </CreatedAt>
    </Layout>
  );
};

export default RepeaterMural;
