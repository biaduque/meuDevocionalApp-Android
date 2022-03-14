import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import BottomNavigation from '../../components/BottomNavigation';
import Fragments from '../../routes/fragment';
import {useSelector} from 'react-redux';
import Header from '../../components/Header';

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

      <Header animatedValue={$app.offset} title={$app.activeTab} />

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
});

export default Main;
