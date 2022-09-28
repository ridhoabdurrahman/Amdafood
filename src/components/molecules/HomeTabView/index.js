import React from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {
  ImageCappucino,
  ImageChickenWing,
  ImageFrenchFries,
  ImageIceChocolate,
  ImageNasgor,
  ImageNugget,
  ImageOtak,
  ImageRedVelvet,
  ImageRiceBowl,
} from '../../../assets';
import {FoodDetail} from '../../../pages';
import ItemListFood from '../ItemListFood';
import {useNavigation} from '@react-navigation/native';

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 3,
      width: '6%',
      marginLeft: '10%',
      borderRadius: 3,
      justifyContent: 'center',
    }}
    style={{
      backgroundColor: '#FFFFFF',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomColor: '#F2F2F2',
      borderBottomWidth: 1,
    }}
    tabStyle={{width: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: 'Nunito-Medium',
          fontSize: 14,
          color: focused ? '#020202' : '#8D92A3',
          marginLeft: 24,
        }}>
        {route.title}
      </Text>
    )}
  />
);

const NewTaste = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{paddingTop: 4, paddingHorizontal: 24}}>
        <ItemListFood
          rating={3}
          imageSource={ImageCappucino}
          foodName="Cappucino Hot"
          price="23.000"
          onPress={() => navigation.navigate(FoodDetail)}
        />
        <ItemListFood
          rating={3}
          imageSource={ImageFrenchFries}
          foodName="Kentang Goreng"
          price="20.000"
          onPress={() => navigation.navigate(FoodDetail)}
        />
        <ItemListFood
          rating={3}
          imageSource={ImageRiceBowl}
          foodName="Rice Bowl"
          price="35.000"
          onPress={() => navigation.navigate(FoodDetail)}
        />
        <ItemListFood
          rating={3}
          imageSource={ImageIceChocolate}
          foodName="Ice Chocolate"
          price="25.000"
          onPress={() => navigation.navigate(FoodDetail)}
        />
      </View>
    </ScrollView>
  );
};

const Popular = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{paddingTop: 4, paddingHorizontal: 24}}>
        <ItemListFood
          rating={3}
          imageSource={ImageRedVelvet}
          foodName="Red Velvet Ice"
          price="25.000"
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          rating={3}
          imageSource={ImageNasgor}
          foodName="Nasi Goreng Special"
          price="35.000"
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          rating={3}
          imageSource={ImageChickenWing}
          foodName="Chicken Wings"
          price="30.000"
          onPress={() => navigation.navigate('FoodDetail')}
        />
      </View>
    </ScrollView>
  );
};

const Recommended = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{paddingTop: 4, paddingHorizontal: 24}}>
        <ItemListFood
          rating={3}
          imageSource={ImageOtak}
          foodName="Otak-Otak"
          price="20.000"
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          rating={3}
          imageSource={ImageNugget}
          foodName="Nugget Goreng"
          price="20.000"
          onPress={() => navigation.navigate('FoodDetail')}
        />
      </View>
    </ScrollView>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const HomeTabView = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recommended'},
  ]);

  const renderScene = SceneMap({
    1: NewTaste,
    2: Popular,
    3: Recommended,
  });
  return (
    <TabView
      style={{
        backgroundColor: '#FFFFFF',
        borderBottomColor: '#F2F2F2',
        borderBottomWidth: 1,
      }}
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
};

export default HomeTabView;

const styles = StyleSheet.create({});
