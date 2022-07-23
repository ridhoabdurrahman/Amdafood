import {View, Text} from 'react-native';
import React from 'react';
import {SignIn, SplashScreen} from '../pages';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const Router = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
};

export default Router;
