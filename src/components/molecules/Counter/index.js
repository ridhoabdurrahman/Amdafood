import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IcBtnMin, IcBtnPlus} from '../../../assets';

const Counter = () => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity activeOpacity={0.3}>
        <IcBtnMin />
      </TouchableOpacity>
      <Text style={styles.number}>19</Text>
      <TouchableOpacity activeOpacity={0.3}>
        <IcBtnPlus />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  number: {
    fontSize: 16,
    fontFamily: 'Nunito-Regular',
    marginHorizontal: 10,
  },
});
