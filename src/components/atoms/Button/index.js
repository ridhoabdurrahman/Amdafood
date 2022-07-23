import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Button = ({text, color = '#0075FF', textColor = '#FFFFFF'}) => {
  return (
    <View style={styles.container(color)}>
      <Text style={styles.text(textColor)}>{text}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (color) => ({
    backgroundColor: color,
    padding: 11,
    borderRadius: 8,
  }),
  text: (color) => ({
    fontFamily: 'Nunito-SemiBold',
    fontSize: 16,
    color: color,
    textAlign: 'center',
  }),
});
