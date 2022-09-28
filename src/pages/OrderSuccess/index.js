import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IlSuccessOrder} from '../../assets';
import {Button, Gap} from '../../components';

const SuccessOrder = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.imageWrapper}>
        <IlSuccessOrder />
      </View>
      <Gap height={40} />
      <Text style={styles.title}>You've Made Order</Text>
      <Gap height={10} />
      <View style={styles.subTitleWrapper}>
        <Text style={styles.subTitle}>
          Just stay at home while we are preparing your best foods
        </Text>
      </View>
      <Gap height={30} />
      <View style={styles.buttonWrapper}>
        <Button
          text="Order Other Foods"
          onPress={() => navigation.replace('MainApp')}
        />
        <Gap height={12} />
        <Button
          text="View My Order"
          color="#8D92A3"
          onPress={() => navigation.replace('MainApp', {screen: 'Order'})}
        />
      </View>
    </View>
  );
};

export default SuccessOrder;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontFamily: 'Nunito-Medium',
    color: '#020202',
  },
  subTitleWrapper: {
    width: 250,
    height: 42,
  },
  subTitle: {
    textAlign: 'center',
    color: '#8D92A3',
    fontFamily: 'Nunito-Regular',
    fontSize: 18,
  },
  buttonWrapper: {
    width: '100%',
    paddingHorizontal: 80,
  },
});
