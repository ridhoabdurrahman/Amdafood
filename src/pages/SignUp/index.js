import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header, TextInput, Button, Gap} from '../../components';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
      <Header
        title="Sign Up"
        subTitle="Register and Drunk a cup of Coffee"
        onBack={() => {}}
      />
      <View style={styles.container}>
        <View style={styles.photo}>
          <View style={styles.photoBorder}>
            <View style={styles.photoContainer}>
              <Text style={styles.photoText}>add photo</Text>
            </View>
          </View>
        </View>
        <TextInput label="Fullname" placeholder="Type your fullname" />
        <Gap height={16} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button
          text="Continue"
          onPress={() => navigation.navigate('SignUpAddress')}
        />
      </View>
    </View>
  );
};

export default SignUp;

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
  photo: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 16,
  },
  photoBorder: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#F0F0F0',
    padding: 24,
  },
  photoText: {
    fontSize: 14,
    fontFamily: 'Nunito-Light',
    color: '#8D92A3',
    textAlign: 'center',
  },
});
