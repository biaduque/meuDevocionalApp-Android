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
import moment from 'moment';
import MockData from './src/common/mockData';

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
    const mockData = new MockData();

    async function getDataStoraged() {
      $myDevotionals.mural = await utils.getMural();
    }

    const parseColors = bgColor => {
      return utils.transformDataColor(bgColor, themeApp);
    };

    async function setItemWidget() {
      const muralItems = $myDevotionals.mural ? $myDevotionals.mural.items : [];
      const mockWidgetItems = mockData.widgetContentMock();

      const mergedArray = [...muralItems, ...mockWidgetItems];

      const randomItem =
        mergedArray[Math.floor(Math.random() * mergedArray.length)];

      const colors = parseColors(randomItem.backgroundColor);

      SharedStorage.set(
        JSON.stringify({
          text: randomItem.titulo,
          color: colors.titulo,
          background: randomItem.backgroundColor,
          date:
            randomItem.createdAt != null
              ? moment(randomItem.createdAt, 'DD/MM/YYYY').format('DD/MM/YYYY')
              : randomItem.descricao,
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
