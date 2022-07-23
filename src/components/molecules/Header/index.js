import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = ({title, subTitle}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 24,
  },
  title: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 22,
    color: '#020202',
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Nunito-Regular',
    color: '#8D92A3',
  },
});
