import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('HomeScreen');
    }, 5000);
  }, []);
  return (
    <View style={styles.container}>
      <Image source={require('../assests/cart.png')} style={styles.logo} />
      <Text style={styles.doct}>Shopping Cart</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#71bfb5',
  },
  logo: {
    width: 100,
    height: 100,
    tintColor: 'white',
  },
  doct: {
    color: 'white',
    fontSize: 20,
    fontWeight: '800',
    marginTop: 20,
  },
});
