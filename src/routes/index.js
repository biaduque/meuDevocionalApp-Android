import React from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import StackRoutes from './stack';

const Routes = ({currentTheme}) => {
  return (
    <NavigationContainer
      theme={currentTheme === 'light' ? DefaultTheme : DarkTheme}>
      <StackRoutes />
    </NavigationContainer>
  );
};

export {Routes};
