import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';
import BottomNavigation from '../../components/BottomNavigation';
import Fragments from '../../routes/fragment';
import {useSelector} from 'react-redux';
import HeaderScrollView from 'react-native-header-scroll-view';

const Main = () => {
  const $app = useSelector(state => state.app);

  useEffect(() => {}, [$app]);

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
    flexDirection: 'column',
    width: '100%',
  },
  headerContainerStyle: {
    backgroundColor: '#000',
    borderBottomWidth: 0,
    borderTopWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
});

export default Main;
