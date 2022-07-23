import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Logo} from '../../assets';

const SplashScreen = () => {
  return (
    <View style={styles.wrapper}>
      <Logo />
      <View style={{height: 12}} />
      <Text style={styles.title}>AmdaCoffee</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#0075FF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 36,
    fontFamily: 'Nunito-SemiBold',
  },
});
