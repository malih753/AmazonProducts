import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import juice from '../assests/juice.jpg';
const Deals = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended Deal for you</Text>
      <Image source={juice} style={styles.juice} />
      <View style={styles.bot}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.dealbtn}>
            <Text style={styles.deal}>18% off</Text>
          </TouchableOpacity>
          <Text style={styles.del}>Deal</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.dis}>$1,4322</Text>
          <Text style={styles.mrp}>M.R.P</Text>
          <Text style={styles.actual}>$194.2</Text>
        </View>
        <Text style={styles.prod}>
          Fresh juices Avaiable for healthy and clear skin
        </Text>
        <Text style={styles.alldeal}>see all deals</Text>
      </View>
    </View>
  );
};

export default Deals;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    paddingHorizontal: 10,
  },
  juice: {
    width: '100%',
    height: 250,
    marginVertical: 10,
  },
  bot: {
    paddingHorizontal: 10,
  },
  dealbtn: {
    backgroundColor: 'red',
    width: 60,
    alignItems: 'center',
    padding: 5,
    borderRadius: 4,
  },
  deal: {
    color: 'white',
    fontSize: 12,
  },
  del: {
    color: 'red',
    fontWeight: '600',
    marginLeft: 8,
    fontSize: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dis: {
    fontSize: 16,
    color: 'black',
    marginVertical: 5,
  },
  mrp: {
    fontSize: 10,
    marginHorizontal: 10,
  },
  actual: {
    fontSize: 10,
    textDecorationLine: 'line-through',
  },
  prod: {
    fontSize: 14,
    color: 'black',
  },
  alldeal: {
    color: 'green',
    fontSize: 14,
    marginVertical: 10,
  },
});
