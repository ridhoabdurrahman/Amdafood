import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IcBack} from '../../../assets';

const Header = ({title, subTitle, onBack}) => {
  return (
    <View style={styles.container}>
      {onBack && (
        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.backButton}>
            <IcBack />
          </View>
        </TouchableOpacity>
      )}
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    padding: 16,
    marginRight: 16,
    marginLeft: -16,
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
