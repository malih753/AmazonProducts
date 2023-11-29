import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import pay from '../assests/pay.png';
import money from '../assests/money.png';
import scan from '../assests/scan.png';
import bill from '../assests/bill.png';
import {recentSearch} from '../data/RecentSearchData';

const Service = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingRight: 20}}
      style={styles.service}>
      <View style={styles.servcont}>
        <View style={styles.row}>
          <View style={styles.inner}>
            <Image source={pay} style={styles.img} />
            <Text style={styles.title}>Product pay</Text>
          </View>
          <View style={styles.inner}>
            <Image source={money} style={styles.img} />
            <Text style={styles.title}>send money</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.inner}>
            <Image source={scan} style={styles.img} />
            <Text style={styles.title}>Scan Pay</Text>
          </View>
          <View style={styles.inner}>
            <Image source={bill} style={styles.img} />
            <Text style={styles.title}>pay Bills</Text>
          </View>
        </View>
      </View>
      {recentSearch.map(item => {
        return (
          <View key={item.id} style={styles.outer}>
            <Text style={styles.txt}>{item.title}</Text>
            <Image source={item.image} style={styles.servimg} />
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Service;

const styles = StyleSheet.create({
  service: {
    marginTop: -20,
    paddingHorizontal: 10,
  },
  servcont: {
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 5,
  },
  img: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inner: {
    padding: 10,
    alignItems: 'center',
    paddingTop: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 12,
    color: 'black',
  },
  servimg: {
    width: '100%',
    height: 130,
  },
  outer: {
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 5,
    padding: 5,
    width: 140,
    marginLeft: 8,
  },
  txt: {
    fontSize: 13,
    color: 'black',
    marginBottom: 10,
  },
});
