import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ItemValue = ({label, value, valueColor = '#020202'}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value(valueColor)}>{value}</Text>
    </View>
  );
};

export default ItemValue;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Nunito-Regular',
    color: '#8D92A3',
  },
  value: (color) => ({
    fontSize: 14,
    fontFamily: 'Nunito-Regular',
    color: color,
  }),
});
