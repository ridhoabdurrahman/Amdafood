import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Select, TextInput} from '../../components';

const SignUpAddress = () => {
  return (
    <View style={styles.wrapper}>
      <Header
        title="Address"
        subTitle="Make sure it's valid !"
        onBack={() => {}}
      />
      <View style={styles.container}>
        <TextInput label="Phone No." placeholder="Type your phone number" />
        <Gap height={16} />
        <TextInput label="Address" placeholder="Type your address" />
        <Gap height={16} />
        <TextInput label="House No." placeholder="Type your house number" />
        <Gap height={16} />
        <Select label="City" />
        <Gap height={24} />
        <Button text="Sign Up Now" />
      </View>
    </View>
  );
};

export default SignUpAddress;

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
