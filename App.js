import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {Routes} from './src/routes';
import {IconlyProvider} from 'react-native-iconly';
import {Provider} from 'react-redux';
import store from './src/store';
import {PortalProvider} from '@gorhom/portal';
import {ThemeProvider} from 'styled-components';
import {Appearance} from 'react-native';
import {dark, light} from './src/styles/themes';

const App = () => {
  const colorScheme = Appearance.getColorScheme();
  const [themeApp, setThemeApp] = useState(
    colorScheme === 'dark' ? dark : light,
  );

  useEffect(() => {
    function getStoragedTheme() {
      const theme = colorScheme === 'dark' ? dark : light;

      store.getState().app.theme = theme;
      setThemeApp(theme);
    }

    getStoragedTheme();

    return () => {};
  }, [colorScheme]);

  return (
    <Provider store={store}>
      <ThemeProvider theme={themeApp}>
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
