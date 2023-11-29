import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const SubCoder = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 0}}
      colors={['#7ea0de', '#7d9bd1', '#ccd5e6']}
      style={styles.container}>
      <Feather name="map" size={16} color="black" />
      <Text style={styles.deliver}>Deliver to Maliha - Islamabad 978633</Text>
      <FontAwesome5 name="arrow-down" size={16} color="black" />
    </LinearGradient>
  );
};

export default SubCoder;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliver: {
    fontSize: 13,
    color: 'gray',
    paddingHorizontal: 10,
  },
});
