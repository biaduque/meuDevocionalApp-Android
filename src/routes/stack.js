import React from 'react';
import OnBoardingScreen from '../screens/OnBoarding';
import Main from '../screens/Main';
import CreateDevotional from '../screens/CreateDevotional';
import VerLeituraRapida from '../screens/VerLeituraRapida';
import Webview from '../screens/Webview';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

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
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />
      <Stack.Screen
        name="VerLeituraRapida"
        component={VerLeituraRapida}
        options={{
          gestureEnabled: true,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="Webview"
        component={Webview}
        options={{
          gestureEnabled: true,
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackRoutes;
