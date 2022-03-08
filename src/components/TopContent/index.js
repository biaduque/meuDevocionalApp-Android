import React from 'react';
import {View} from 'react-native';
import {GreetingsTitle, Layout, SubtitleText} from './styles';

const TopContent = ({title, showSecondLine, subTitle, ...props}) => {
  return (
    <Layout {...props}>
      <View>
        <GreetingsTitle>{title}</GreetingsTitle>

        {showSecondLine && <SubtitleText>{subTitle}</SubtitleText>}
      </View>
    </Layout>
  );
};

export default TopContent;
