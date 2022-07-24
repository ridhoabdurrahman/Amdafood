import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {IcStarOn, ImageCoffee} from '../../../assets';

const FoodCard = ({image, foodName}) => {
  return (
    <View style={styles.wrapper}>
      <Image style={styles.image} source={image} />
      <View style={styles.content}>
        <Text style={styles.foodName}>{foodName}</Text>
        <View style={styles.ratingWrapper}>
          <View style={styles.starWrapper}>
            <IcStarOn />
            <IcStarOn />
            <IcStarOn />
            <IcStarOn />
            <IcStarOn />
          </View>
          <Text style={styles.rating}>5.0</Text>
        </View>
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
    height: 140,
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
  ratingWrapper: {flexDirection: 'row', marginTop: 6, alignItems: 'center'},
  starWrapper: {
    flexDirection: 'row',
    marginRight: 6,
  },
  rating: {
    color: '#8D92A3',
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
  },
});
