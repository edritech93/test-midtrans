import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import Midtrans from '@adrianha/react-native-midtrans';

const midtrans = new Midtrans({
  clientKey: 'CLIENT_KEY',
  baseUrl: 'BASE_URL',

  /** iOS only: Midtrans.ENVIRONMENT_SANDBOX | Midtrans.ENVIRONMENT_PRODUCTION */
  environment: Midtrans.ENVIRONMENT_SANDBOX,

  /** android only */
  colorTheme: {
    primaryColor: '#000000',
  },
});

export default function App(props) {

  useEffect(() => {
    payment()
  }, [])

  async function payment() {
    try {
      const result = await midtrans.startPaymentWithSnapToken('SNAP_TOKEN');
      console.log({ result });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text> App </Text>
    </View>
  );
}
