import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {SignIn, SignUp, SplashScreen} from '../pages';

const Stack = createStackNavigator();
const Router = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default Router;
