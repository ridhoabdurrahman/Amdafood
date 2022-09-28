import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IcBackWhite} from '../../assets';
import {ImageCappucino} from '../../assets/Dummy';
import {Button, Counter, Rating} from '../../components';

const FoodDetail = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ImageCappucino} style={styles.cover}>
        <TouchableOpacity style={styles.back} activeOpacity={0.5}>
          <IcBackWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.mainContent}>
          <View style={styles.productContainer}>
            <View>
              <Text style={styles.foodName}>Cappuccino Hot</Text>
              <Rating />
            </View>
            <Counter />
          </View>
          <Text style={styles.desc}>
            A cappuccino is the perfect balance of espresso, steamed milk and
            foam. This coffee is all about the structure and the even splitting
            of all elements into equal thirds.
          </Text>
          <Text style={styles.label}>Ingredients :</Text>
          <Text style={styles.desc}>Espresso, Steamed Milk, Sugar, Foam </Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.priceWrapper}>
            <Text style={styles.labelTotal}>Total Price :</Text>
            <Text style={styles.textPrice}>IDR 115.000 </Text>
          </View>
          <View style={styles.button}>
            <Button
              text="Order Now"
              onPress={() => navigation.navigate('OrderSummary')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  page: {flex: 1},
  cover: {
    height: 330,
    paddingTop: 24,
    paddingLeft: 12,
  },
  back: {
    flexDirection: 'row',
    width: 40,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    marginTop: -40,
    paddingTop: 26,
    paddingHorizontal: 16,
    flex: 1,
  },
  mainContent: {flex: 1},
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  foodName: {
    fontSize: 18,
    fontFamily: 'Nunito-Bold',
    color: '#020202',
  },
  desc: {
    fontSize: 15,
    fontFamily: 'Nunito-Regular',
    color: '#8D92A0',
    textAlign: 'justify',
    lineHeight: 24,
  },
  label: {
    fontSize: 16,
    fontFamily: 'Nunito-Medium',
    color: '#020202',
    marginBottom: 2,
  },
  footer: {
    flexDirection: 'row',
    paddingVertical: 26,
    alignItems: 'center',
  },
  priceWrapper: {flex: 1},
  labelTotal: {
    fontSize: 13,
    fontFamily: 'Nunito-Regular',
    color: '#8D92A3',
  },
  textPrice: {
    fontSize: 18,
    fontFamily: 'Nunito-Regular',
    color: '#020202',
  },
  button: {
    width: 163,
  },
});
