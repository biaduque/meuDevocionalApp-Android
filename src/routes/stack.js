import React from 'react';
import OnBoardingScreen from '../screens/OnBoarding';
import Main from '../screens/Main';
import CreateDevotional from '../screens/Devocional/Create';
import CreateMural from '../screens/Mural/Create';
import LeiturasView from '../screens/Leituras/View';
import Webview from '../screens/Webview';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import InfoGeneric from '../screens/InfoGeneric';
import MyDevotionalView from '../screens/Devocional/View';
import SearchDevocionais from '../screens/SearchDevocionais';

const Stack = createStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'none',
        headerStyle: {height: 0},
      }}
      initialRouteName={'Main'}>
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
        name="SearchDevocionais"
        component={SearchDevocionais}
        options={{
          gestureEnabled: true,
          ...TransitionPresets.ScaleFromCenterAndroid,
        }}
      />
      <Stack.Screen
        name="CreateMural"
        component={CreateMural}
        options={{
          gestureEnabled: true,
          ...TransitionPresets.ScaleFromCenterAndroid,
        }}
      />
      <Stack.Screen
        name="LeiturasView"
        component={LeiturasView}
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
        name="InfoGeneric"
        component={InfoGeneric}
        options={{
          gestureEnabled: true,
          ...TransitionPresets.ScaleFromCenterAndroid,
          cardStyle: {backgroundColor: 'transparent'},
          cardOverlayEnabled: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackRoutes;
