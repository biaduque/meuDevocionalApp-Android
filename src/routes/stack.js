import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import OnBoardingScreen from "../screens/OnBoarding";
import Main from "../screens/Main";
import ProfileScreen from "../screens/Profile";

const StackRoutes = createNativeStackNavigator();

const StackROutes = () => {

    return (
        <StackRoutes.Navigator
            screenOptions={{
                headerShown: false,
                animation: "none"
            }}
            initialRouteName={'OnBoarding'}
        >
            <StackRoutes.Screen name="OnBoarding" component={OnBoardingScreen}/>
            <StackRoutes.Screen name="Main" component={Main}/>
            <StackRoutes.Screen name="Profile" component={ProfileScreen}/>
        </StackRoutes.Navigator>
    )
}

export default StackROutes;