import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Picker} from '@react-native-community/picker';

const Select = ({label}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
        <Picker
        // selectedValue={this.state.language}
        // onValueChange={(itemValue, itemIndex) =>
        //   this.setState({language: itemValue})
        // }
        >
          <Picker.Item label="City 1" value="City1" />
          <Picker.Item label="City 2" value="City2" />
          <Picker.Item label="City 3" value="City3" />
        </Picker>
      </View>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: 'Nunito-Medium',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    paddingHorizontal: 2,
  },
});
