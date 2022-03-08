import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import BottomNavigation from '../../components/BottomNavigation';
import Fragments from '../../routes/fragment';
import Header from '../../components/Header';

const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <Header />
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
  },
});

export default Main;
