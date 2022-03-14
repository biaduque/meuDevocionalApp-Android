import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LeituraScreen} from '../fragments/Leitura';
import MyDevotionalsScreen from '../fragments/MyDevotionals';
import Mural from '../fragments/Mural';
import {useDispatch} from 'react-redux';
import {setOffset} from '../store/actions/app.action';
import {Animated} from 'react-native';

const Tab = createNativeStackNavigator();

const AppTabs = () => {
  const dispatch = useDispatch();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}
      screenListeners={{
        state: () => {
          dispatch(setOffset(new Animated.Value(0)));
        },
      }}
      initialRouteName={'Leitura'}>
      <Tab.Screen name="Leitura" component={LeituraScreen} />
      <Tab.Screen name="MyDevotionals" component={MyDevotionalsScreen} />
      <Tab.Screen name="Mural" component={Mural} />
    </Tab.Navigator>
  );
};

export default AppTabs;
