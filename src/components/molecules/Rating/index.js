import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IcStarOn, IcStarOff} from '../../../assets';

const Rating = () => {
  return (
    <View style={styles.ratingWrapper}>
      <View style={styles.starWrapper}>
        <IcStarOn />
        <IcStarOn />
        <IcStarOn />
        <IcStarOn />
        <IcStarOff />
      </View>
      <Text style={styles.rating}>5.0</Text>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  ratingWrapper: {flexDirection: 'row', marginTop: 2, alignItems: 'center'},
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
