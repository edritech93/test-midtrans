import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import PaymentGateway from 'react-native-midtrans-payment';

export default function App(props) {

  // useEffect(() => {
  //   _handlePayment();
  // }, [])

  const _handlePayment = async () => {
    try{
      const optionConnect = {
        clientKey: "123qwe",
        urlMerchant: "https://www.weefer.co.id/",
        sandbox: true,
      }
  
      const transRequest = {
        transactionId: "0001",
        totalAmount: 4000
      }
  
      const itemDetails = [
        { id: "001", price: 1000, qty: 4, name: "peanuts" }
      ];
  
      const creditCardOptions = {
        saveCard: false,
        saveToken: false,
        paymentMode: "Normal",
        secure: false
      };
  
      const userDetail = {
        fullName: "jhon",
        email: "jhon@payment.com",
        phoneNumber: "0850000000",
        userId: "U01",
        address: "street coffee",
        city: "yogyakarta",
        country: "IDN",
        zipCode: "59382"
      };
  
      const optionColorTheme = {
        primary: '#c51f1f',
        primaryDark: '#1a4794',
        secondary: '#1fce38'
      }
  
      const optionFont = {
        defaultText: "open_sans_regular.ttf",
        semiBoldText: "open_sans_semibold.ttf",
        boldText: "open_sans_bold.ttf"
      }
  
      const callback = (res) => {
        console.log(res)
      };
  
      PaymentGateway.checkOut(
        optionConnect,
        transRequest,
        itemDetails,
        creditCardOptions,
        userDetail,
        optionColorTheme,
        optionFont,
        callback
      );
    } catch (error) {
      console.log('------------------------------------');
      console.log('error => ', error);
      console.log('------------------------------------');
    }
  }

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'red'
    }}>
      <Button title={'Payment'} onPress={_handlePayment} />
    </View>
  );
}
