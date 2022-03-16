import React, {useCallback, useEffect, useState} from 'react';
import {Appearance, SafeAreaView, StyleSheet} from 'react-native';
import {Routes} from './src/routes';
import {IconlyProvider} from 'react-native-iconly';
import {Provider} from 'react-redux';
import store from './src/store';
import {PortalProvider} from '@gorhom/portal';
import {ThemeProvider} from 'styled-components';
import {dark, light} from './src/styles/themes';

const App = () => {
  const [themeApp, setThemeApp] = useState(
    Appearance.getColorScheme() === 'dark' ? dark : light,
  );

  const updateColorScheme = useCallback(() => {
    const theme = Appearance.getColorScheme() === 'dark' ? dark : light;
    store.getState().app.theme = theme;
    setThemeApp(theme);
  }, []);

  useEffect(() => {
    const listener = Appearance.addChangeListener(updateColorScheme);

    return () => {
      listener.remove();
    };
  }, [updateColorScheme]);

  return (
    <Provider store={store}>
      <ThemeProvider theme={themeApp}>
        <PortalProvider>
          <SafeAreaView style={styles.container}>
            <IconlyProvider>
              <Routes currentTheme={themeApp.name} />
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
