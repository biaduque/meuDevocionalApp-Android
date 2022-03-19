import React, {useCallback, useEffect, useState} from 'react';
import {
  Appearance,
  SafeAreaView,
  StyleSheet,
  NativeModules,
} from 'react-native';
import {Routes} from './src/routes';
import {IconlyProvider} from 'react-native-iconly';
import {Provider} from 'react-redux';
import store from './src/store';
import {PortalProvider} from '@gorhom/portal';
import {ThemeProvider} from 'styled-components';
import {dark, light} from './src/styles/themes';
import Utils from './src/common/utils';

const App = () => {
  const $myDevotionals = store.getState().myDevotionals;
  const SharedStorage = NativeModules.SharedStorage;
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

  useEffect(() => {
    const utils = new Utils();

    async function getDataStoraged() {
      $myDevotionals.mural = await utils.getMural();
    }

    const parseColors = bgColor => {
      return utils.transformDataColor(bgColor, themeApp);
    };

    async function setItemWidget() {
      const muralItems = $myDevotionals.mural;

      const randomItem =
        muralItems[Math.floor(Math.random() * muralItems.length)];
      const colors = parseColors(randomItem.backgroundColor);

      SharedStorage.set(
        JSON.stringify({
          text: randomItem.titulo,
          color: colors.titulo,
          background: colors.background,
        }),
      );
    }

    getDataStoraged().then(async () => {
      await setItemWidget();
    });
  }, [$myDevotionals, SharedStorage, themeApp]);

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
