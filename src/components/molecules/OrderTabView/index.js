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
          marginLeft: 10,
        }}>
        {route.title}
      </Text>
    )}
  />
);

const InProgress = () => {
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
          type="in-progress"
          items={3}
        />
        <ItemListFood
          rating={3}
          imageSource={ImageFrenchFries}
          foodName="Kentang Goreng"
          price="20.000"
          onPress={() => navigation.navigate(FoodDetail)}
          type="in-progress"
          items={3}
        />
        <ItemListFood
          rating={3}
          imageSource={ImageRiceBowl}
          foodName="Rice Bowl"
          price="35.000"
          onPress={() => navigation.navigate(FoodDetail)}
          type="in-progress"
          items={3}
        />
        <ItemListFood
          rating={3}
          imageSource={ImageIceChocolate}
          foodName="Ice Chocolate"
          price="25.000"
          onPress={() => navigation.navigate(FoodDetail)}
          type="in-progress"
          items={3}
        />
      </View>
    </ScrollView>
  );
};

const PastOrder = () => {
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
          type="past-orders"
          items={3}
          date="Dec 9, 09:00"
        />
        <ItemListFood
          rating={3}
          imageSource={ImageNasgor}
          foodName="Nasi Goreng Special"
          price="35.000"
          onPress={() => navigation.navigate('FoodDetail')}
          type="past-orders"
          items={3}
          date="Dec 9, 09:00"
        />
        <ItemListFood
          rating={3}
          imageSource={ImageChickenWing}
          foodName="Chicken Wings"
          price="30.000"
          onPress={() => navigation.navigate('FoodDetail')}
          type="past-orders"
          items={3}
          date="Dec 9, 09:00"
          status="Cancel"
        />
      </View>
    </ScrollView>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const OrderTabView = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'In Progress'},
    {key: '2', title: 'Past Order'},
  ]);

  const renderScene = SceneMap({
    1: InProgress,
    2: PastOrder,
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

export default OrderTabView;

const styles = StyleSheet.create({});
