import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Layout} from './styles';

const Button = ({title, buttonStyles, textStyles, ...props}) => {
  return (
    <Layout {...props} activeOpacity={0.4} style={{...buttonStyles}}>
      <Text style={{...textStyles}}>{title}</Text>
    </Layout>
  );
};

export default Button;
