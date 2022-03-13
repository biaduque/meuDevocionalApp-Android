import React from 'react';
import OnBoardingScreen from '../screens/OnBoarding';
import Main from '../screens/Main';
import CreateDevotional from '../screens/Devocional/Create';
import VerLeituraRapida from '../screens/LeituraRapida/View';
import Webview from '../screens/Webview';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import InfoMyDevotional from '../screens/Devocional/Info';
import MyDevotionalView from '../screens/Devocional/View';

const Stack = createStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'none',
        headerStyle: {height: 0},
        cardOverlayEnabled: true,
      }}
      initialRouteName={'OnBoarding'}>
      <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen
        name="CreateDevotional"
        component={CreateDevotional}
        options={{
          gestureEnabled: true,
          ...TransitionPresets.ScaleFromCenterAndroid,
        }}
      />
      <Stack.Screen
        name="VerLeituraRapida"
        component={VerLeituraRapida}
        options={{
          gestureEnabled: true,
          ...TransitionPresets.ScaleFromCenterAndroid,
        }}
      />
      <Stack.Screen
        name="MyDevotionalView"
        component={MyDevotionalView}
        options={{
          gestureEnabled: true,
          ...TransitionPresets.ScaleFromCenterAndroid,
        }}
      />
      <Stack.Screen
        name="Webview"
        component={Webview}
        options={{
          gestureEnabled: true,
          ...TransitionPresets.ScaleFromCenterAndroid,
        }}
      />
      <Stack.Screen
        name="InfoMyDevotional"
        component={InfoMyDevotional}
        options={{
          gestureEnabled: true,
          ...TransitionPresets.ScaleFromCenterAndroid,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackRoutes;
