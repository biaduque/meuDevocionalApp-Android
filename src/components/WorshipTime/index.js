import React from 'react';
import {
  CirclePlay,
  ImageBackground,
  ImagePlay,
  PlayIcon,
  WorshipTimeWrapper,
} from './styles';
import {View} from 'react-native';
import PlayImage from '../../assets/illustrations/playIcon.png';

const WorshipTime = ({navigateToMusic, ...rest}) => {
  return (
    <WorshipTimeWrapper {...rest}>
      <ImageBackground
        source={require('../../assets/illustrations/whorshipTime.png')}
      />

      <View />

      <CirclePlay onPress={() => navigateToMusic()}>
        <ImagePlay source={PlayImage} />
      </CirclePlay>
    </WorshipTimeWrapper>
  );
};

export default WorshipTime;
