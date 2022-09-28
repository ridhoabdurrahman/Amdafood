import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {
  ImageBread,
  ImageBurger,
  ImageCoffee,
  ImageCroffle,
  ImageRamen,
} from '../../assets';
import {FoodCard, Gap, HeaderHome, HomeTabView} from '../../components';

const Home = () => {
  return (
    <View style={styles.page}>
      <HeaderHome />
      <View>
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
      <View style={styles.tabWrapper}>
        <HomeTabView />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  foodCardWrapper: {
    flexDirection: 'row',
    marginVertical: 24,
  },
  tabWrapper: {
    flex: 1,
  },
});
