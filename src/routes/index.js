import React, {useEffect, useState} from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import StackRoutes from './stack';
import {useSelector} from 'react-redux';

const Routes = ({currentTheme}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const $app = useSelector(state => state.app);

  useEffect(() => {
    const appLoaded = $app.isLoaded;
    console.log(appLoaded);

    setTimeout(() => {
      setIsLoaded(appLoaded);
    }, 3000);
  }, [$app.isLoaded]);

  return (
    <NavigationContainer
      theme={currentTheme === 'light' ? DefaultTheme : DarkTheme}>
      <StackRoutes />
    </NavigationContainer>
  );
};

export {Routes};
