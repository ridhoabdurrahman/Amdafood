import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {
  ImageBread,
  ImageBurger,
  ImageCoffee,
  ImageCroffle,
  ImageRamen,
  ProfileDummy,
} from '../../assets';
import {FoodCard, Gap} from '../../components';

const Home = () => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.appName}>AmdaCoffee</Text>
          <Text style={styles.desc}>Let's get some Coffee for your body</Text>
        </View>
        <Image source={ProfileDummy} style={styles.photo} />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.foodCardWrapper}>
          <Gap width={24} />
          <FoodCard image={ImageCoffee} foodName="Ice Cappucino" />
          <FoodCard image={ImageRamen} foodName="Mie Ramen" />
          <FoodCard image={ImageCroffle} foodName="Croffle" />
          <FoodCard image={ImageBurger} foodName="Burger" />
          <FoodCard image={ImageBread} foodName="Sandwich" />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 22,
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  appName: {
    fontSize: 22,
    fontFamily: 'Nunito-Bold',
    color: '#020202',
  },
  desc: {
    fontSize: 14,
    fontFamily: 'Nunito-Light',
    color: '#8D92A3',
  },
  photo: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  foodCardWrapper: {
    flexDirection: 'row',
    marginVertical: 24,
  },
});
