import React from 'react';
import {
  CirclePlay,
  ImageBackground,
  PlayIcon,
  WorshipTimeWrapper,
} from './styles';
import {View} from 'react-native';

const WorshipTime = ({navigateToMusic}) => {
  return (
    <WorshipTimeWrapper>
      <ImageBackground
        source={require('../../assets/illustrations/whorshipTime.png')}
      />

      <View />

      <CirclePlay onPress={() => navigateToMusic()}>
        <PlayIcon />
      </CirclePlay>
    </WorshipTimeWrapper>
  );
};

export default WorshipTime;
