import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
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
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 3,
      width: '6%',
      alignItems: 'center',
      marginLeft: '10%',
      borderRadius: 3,
    }}
    style={{backgroundColor: '#FFFFFF'}}
    tabStyle={{width: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: 'Nunito-SemiBold',
          fontSize: 14,
          color: focused ? '#020202' : '#8D92A3',
          marginLeft: 24,
        }}>
        {route.title}
      </Text>
    )}
  />
);

const FirstRoute = () => <View style={{backgroundColor: '#ff4081', flex: 1}} />;

const SecondRoute = () => (
  <View style={{backgroundColor: '#673ab7', flex: 1}} />
);

const initialLayout = {width: Dimensions.get('window').width};

const Home = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recommended'},
  ]);

  const renderScene = SceneMap({
    1: FirstRoute,
    2: SecondRoute,
    3: FirstRoute,
  });
  return (
    <View style={styles.page}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.appName}>AmdaCoffee</Text>
          <Text style={styles.desc}>Let's get some Coffee for your body</Text>
        </View>
        <Image source={ProfileDummy} style={styles.photo} />
      </View>
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
        <TabView
          renderTabBar={renderTabBar}
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
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
  tabWrapper: {
    flex: 1,
  },
});
