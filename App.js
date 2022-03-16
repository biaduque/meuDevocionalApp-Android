import React, {useCallback, useEffect, useState} from 'react';
import {Appearance, SafeAreaView, StyleSheet} from 'react-native';
import {Routes} from './src/routes';
import {IconlyProvider} from 'react-native-iconly';
import {Provider} from 'react-redux';
import store from './src/store';
import {PortalProvider} from '@gorhom/portal';
import {ThemeProvider} from 'styled-components';
import {dark, light} from './src/styles/themes';
import AnimatedSplash from 'react-native-animated-splash-screen';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
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
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={themeApp}>
        <PortalProvider>
          <SafeAreaView style={styles.container}>
            <IconlyProvider>
              {!isLoaded && (
                <AnimatedSplash
                  translucent={true}
                  isLoaded={isLoaded}
                  logoImage={require('./assets/logo.png')}
                  backgroundColor={'#8BA293'}
                  logoHeight={150}
                  logoWidth={150}
                />
              )}

              {isLoaded && <Routes currentTheme={themeApp.name} />}
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
