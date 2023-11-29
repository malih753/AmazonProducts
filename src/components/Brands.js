import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import brand1 from '../assests/brand1.jpg';
import brand2 from '../assests/brand2.jpg';
import brand3 from '../assests/brand3.jpg';
import brand4 from '../assests/brand4.jpg';

const Brands = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Top Rated brands Products</Text>
        <View style={styles.row}>
          <View style={styles.brand}>
            <Image source={brand1} style={styles.band} />
            <Text style={styles.title}>Min 20% off | Shoes Pair</Text>
          </View>
          <View style={styles.brand}>
            <Image source={brand2} style={styles.band} />
            <Text style={styles.title}>Min 40% off | Shoes Red pair</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.brand}>
            <Image source={brand3} style={styles.band} />
            <Text style={styles.title}>Min 50% off | Dress Collection</Text>
          </View>
          <View style={styles.brand}>
            <Image source={brand4} style={styles.band} />
            <Text style={styles.title}>Min 35% off | Night Dresses</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Brands;

const styles = StyleSheet.create({
  band: {
    width: '100%',
    height: 150,
    borderRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    padding: 10,
  },
  container: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#dddddd',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
  },
  brand: {
    width: '50%',
    padding: 10,
  },
  title: {
    fontSize: 12,
    color: 'black',
    marginTop: 4,
  },
});
