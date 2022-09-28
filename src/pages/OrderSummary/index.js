import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, ItemListFood, ItemValue} from '../../components';
import {ImageCappucino} from '../../assets';

const OrderSummary = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Header
        title="Payment"
        subTitle="You deserve better Coffee"
        onBack={() => {}}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Item ordered :</Text>
        <ItemListFood
          imageSource={ImageCappucino}
          foodName="Cappuccino Hot"
          price="23.000"
          items={14}
          type="order-summary"
        />
        <Text style={styles.title}>Detail Transaction :</Text>
        <ItemValue label="Cappuccino Hot" value="IDR 115.000" />
        <ItemValue label="Driver" value="IDR 25.000" />
        <ItemValue label="PPN 10%" value="IDR 11.500" />
        <ItemValue
          label="Total Price"
          value="IDR 151.500"
          valueColor="#1ABC9C"
        />
      </View>
      <View View style={styles.content}>
        <Text style={styles.title}>Deliver to :</Text>
        <ItemValue label="Name" value="Ridho Abdurrahman" />
        <ItemValue label="Phone No." value="0858 8901 5283" />
        <ItemValue label="Address" value="Kp. Citepus Ds. Santanamekar" />
        <ItemValue label="House No." value="07" />
        <ItemValue label="City" value="Tasikmalaya" />
      </View>
      <View style={styles.button}>
        <Button
          text="Checkout Now"
          onPress={() => navigation.replace('SuccessOrder')}
        />
      </View>
    </View>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
    paddingVertical: 16,
    marginTop: 24,
  },
  title: {
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    color: '#020202',
    marginBottom: 8,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
});
