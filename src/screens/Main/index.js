import React, {useRef} from 'react';
import {SafeAreaView, StyleSheet, StatusBar, Animated} from 'react-native';
import BottomNavigation from '../../components/BottomNavigation';
import Fragments from '../../routes/fragment';

const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <Fragments />
      <BottomNavigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    position: 'relative',
  },
});

export default Main;
