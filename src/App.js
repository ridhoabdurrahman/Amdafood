import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import {SignIn, SplashScreen} from './pages';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
