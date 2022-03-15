import React from 'react';
import {Text, View} from 'react-native';
import {CreatedAt, Layout, LayoutImageBackground, Title} from './styles';
import Utils from '../../../common/utils';

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
        background={parseColors().tagsBackground}
        color={parseColors().titulo}>
        {item.createdAt}
      </CreatedAt>
    </Layout>
  ) : (
    <Layout backgroundColor={parseColors().background}>
      <View />
      <Title background={parseColors().background} color={parseColors().titulo}>
        {item.titulo}
      </Title>
      <CreatedAt
        background={parseColors().tagsBackground}
        color={parseColors().titulo}>
        {item.createdAt}
      </CreatedAt>
    </Layout>
  );
};

export default RepeaterMural;
