import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IlSignUpSuccess} from '../../assets';
import {Button, Gap} from '../../components';

const SignUpSuccess = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
      <IlSignUpSuccess />
      <Gap height={40} />
      <Text style={styles.title}>Yeay! Completed</Text>
      <Gap height={10} />
      <View style={styles.subTitleWrapper}>
        <Text style={styles.subTitle}>
          Now you are able to order some Coffee as a self-reward
        </Text>
      </View>
      <Gap height={30} />
      <View style={styles.buttonWrapper}>
        <Button
          text="Find Coffee"
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
    </View>
  );
};

export default SignUpSuccess;

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
