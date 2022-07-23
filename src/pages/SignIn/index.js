import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, TextInput} from '../../components';

const SignIn = () => {
  return (
    <View style={styles.wrapper}>
      <Header title="Sign In" subTitle="Coffee is always good idea!" />
      <View style={styles.container}>
        <TextInput label="Email Address" placeholder="Type your email" />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button text="Sign In" color="#0075FF" textColor="#FFFFFF" />
        <Gap height={12} />
        <Button text="Create New Account" color="#8D92A3" />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
