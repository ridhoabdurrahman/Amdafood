import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Rating from '../Rating';

const FoodCard = ({image, foodName}) => {
  return (
    <View style={styles.wrapper}>
      <Image style={styles.image} source={image} />
      <View style={styles.content}>
        <Text style={styles.foodName}>{foodName}</Text>
        <Rating />
      </View>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  wrapper: {
    width: 200,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
    overflow: 'hidden',
    marginRight: 24,
  },
  image: {
    width: 200,
    height: 130,
    resizeMode: 'cover',
  },
  content: {
    padding: 12,
  },
  foodName: {
    fontSize: 16,
    fontFamily: 'Nunito-Medium',
    color: '#020202',
  },
});
