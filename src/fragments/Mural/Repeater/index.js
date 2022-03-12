import React from 'react';
import {Text, View} from 'react-native';
import {Layout, LayoutImageBackground, Title} from './styles';

const RepeaterMural = ({title, createdAt, image, backgroundColor}) => {
  return image != null ? (
    <LayoutImageBackground source={{require: image}}>
      <View />
      <Title>{title}</Title>
      <Text>{createdAt}</Text>
    </LayoutImageBackground>
  ) : (
    <Layout backgroundColor={backgroundColor}>
      <View />
      <Title>{title}</Title>
      <Text>{createdAt}</Text>
    </Layout>
  );
};

export default RepeaterMural;
