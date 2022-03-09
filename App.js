import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Routes} from './src/routes';
import {IconlyProvider} from 'react-native-iconly';
import {Provider} from 'react-redux';
import store from './src/store';
import {PortalProvider} from '@gorhom/portal';
import {ThemeProvider} from 'styled-components';
import Utils from './src/common/Utils';
import {dark, light} from './src/styles/themes';

const App = () => {
  const utils = new Utils();
  const [theme, setTheme] = useState(store.getState().app.theme);

  useEffect(() => {
    async function getStoragedTheme() {
      const theme = await utils.getData('@MeuDevocional-theme');
      if (theme != null) {
        setTheme(theme.name === 'light' ? light : dark);
      } else {
        setTheme(store.getState().app.theme);
      }
    }

    getStoragedTheme();

    return () => {};
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PortalProvider>
          <SafeAreaView style={styles.container}>
            <IconlyProvider>
              <Routes />
            </IconlyProvider>
          </SafeAreaView>
        </PortalProvider>
      </ThemeProvider>
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
