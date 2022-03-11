import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LeituraScreen} from '../fragments/Leitura';
import MyDevotionalsScreen from '../fragments/MyDevotionals';
import Mural from '../fragments/Mural';

const Tab = createNativeStackNavigator();

const AppTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}
      initialRouteName={'Leitura'}>
      <Tab.Screen name="Leitura" component={LeituraScreen} />
      <Tab.Screen name="MyDevotionals" component={MyDevotionalsScreen} />
      <Tab.Screen name="Mural" component={Mural} />
    </Tab.Navigator>
  );
};

export default AppTabs;
