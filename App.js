import React from 'react';
import {Dimensions, SafeAreaView, StyleSheet} from 'react-native';
import {Routes} from './src/routes';
import {IconlyProvider} from 'react-native-iconly';
import {Provider} from 'react-redux';
import store from './src/store';
import {PortalProvider} from '@gorhom/portal';

const App = () => {
  return (
    <Provider store={store}>
      <PortalProvider>
        <SafeAreaView style={styles.container}>
          <IconlyProvider>
            <Routes />
          </IconlyProvider>
        </SafeAreaView>
      </PortalProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
  },
});

export default App;
