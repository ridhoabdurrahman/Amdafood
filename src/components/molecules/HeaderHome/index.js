import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {ProfileDummy} from '../../../assets';

const HeaderHome = () => {
  return (
    <View style={styles.headerContainer}>
      <View>
        <Text style={styles.appName}>AmdaCoffee</Text>
        <Text style={styles.desc}>Let's get some Coffee for your body</Text>
      </View>
      <Image source={ProfileDummy} style={styles.photo} />
    </View>
  );
};

export default HeaderHome;

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
    borderRadius: 60,
  },
});
