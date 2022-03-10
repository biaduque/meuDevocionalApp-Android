import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import BottomNavigation from '../../components/BottomNavigation';
import Fragments from '../../routes/fragment';
import {useSelector} from 'react-redux';

const Main = () => {
  const $app = useSelector(state => state.app);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={
          $app.theme.name === 'light' ? 'dark-content' : 'light-content'
        }
        backgroundColor={$app.theme.colors.statusBarColor}
      />

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
