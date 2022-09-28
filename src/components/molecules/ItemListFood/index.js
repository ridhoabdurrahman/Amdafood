import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import Rating from '../Rating';

const ItemListFood = ({
  imageSource,
  foodName,
  price,
  onPress,
  items,
  rating,
  type,
  date,
  status,
}) => {
  const renderContent = () => {
    switch (type) {
      case 'product':
        return (
          <>
            <View style={{flex: 1}}>
              <Text style={styles.foodName}>{foodName}</Text>
              <Text style={styles.price}>IDR {price}</Text>
            </View>
            <Rating rating={rating} />
          </>
        );
      case 'order-summary':
        return (
          <>
            <View style={{flex: 1}}>
              <Text style={styles.foodName}>{foodName}</Text>
              <Text style={styles.price}>IDR {price}</Text>
            </View>
            <Text style={styles.items}>{items} items</Text>
          </>
        );
      case 'in-progress':
        return (
          <>
            <View style={{flex: 1}}>
              <Text style={styles.foodName}>{foodName}</Text>
              <Text style={styles.price}>
                {items} Items . IDR {price}
              </Text>
            </View>
          </>
        );
      case 'past-orders':
        return (
          <>
            <View style={{flex: 1}}>
              <Text style={styles.foodName}>{foodName}</Text>
              <Text style={styles.price}>
                {items} Items . IDR {price}
              </Text>
            </View>
            <View>
              <Text style={styles.date}>{date}</Text>
              <Text style={styles.status}>{status}</Text>
            </View>
          </>
        );
      default:
        return (
          <>
            <View style={{flex: 1}}>
              <Text style={styles.foodName}>{foodName}</Text>
              <Text style={styles.price}>IDR {price}</Text>
            </View>
            <Rating />
          </>
        );
    }
  };
  return (
    <TouchableNativeFeedback
      onPress={onPress}
      background={TouchableNativeFeedback.Ripple('#D0D0D0')}>
      <View style={styles.itemWrapper}>
        <Image source={imageSource} style={styles.imageFood} />
        {renderContent()}
      </View>
    </TouchableNativeFeedback>
  );
};

export default ItemListFood;

const styles = StyleSheet.create({
  itemWrapper: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    alignItems: 'center',
  },
  imageFood: {
    width: 60,
    height: 60,
    borderRadius: 8,
    overflow: 'hidden',
    resizeMode: 'cover',
    marginRight: 12,
  },
  foodName: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 16,
    color: '#020202',
    marginBottom: 1,
  },
  price: {
    fontSize: 13,
    fontFamily: 'Nunito-Regular',
    color: '#8D92A3',
    marginTop: 1,
  },
  items: {
    color: '#8D92A3',
    fontFamily: 'Nunito-Regular',
    fontSize: 13,
  },
  date: {
    fontSize: 10,
    fontFamily: 'Nunito-Regular',
    color: '#8D92A3',
  },
  status: {
    fontSize: 10,
    fontFamily: 'Nunito-Regular',
    color: '#D9435E',
  },
});
