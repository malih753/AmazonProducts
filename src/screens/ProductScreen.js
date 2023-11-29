import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {getRating} from '../utiils/helper';
import {Data} from '../data/Data';

const ProductScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Result</Text>
      <Text style={styles.tagline}>
        price and other details based on product size and color
      </Text>
      {Data.map(item => {
        return (
          <View style={styles.product}>
            <View style={styles.prodtImg}>
              <Image source={item.productImg} style={styles.img} />
            </View>
            <View style={styles.proddetail}>
              <Text style={styles.spons}>Sponsored</Text>
              <Text style={styles.det}>{item.prodtName}</Text>
              <View style={styles.rowdet}>
                <Text style={styles.rating}>{item.rating}</Text>
                {getRating(item.rating)}
                <Text style={styles.count}>{item.ratingCount}</Text>
              </View>
              <View style={styles.rowdet}>
                <Text style={styles.price}>{item.actualPrice}</Text>
                <Text style={styles.mrp}>M.R.P</Text>
                <Text style={styles.crossprice}>{item.discountPrice}</Text>
              </View>
              <Text style={{color: '#63b3c9', fontSize: 14}}>Prime</Text>
              <Text style={styles.cash}>{item.deliveryBy}</Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    padding: 10,
  },
  container: {
    padding: 10,
  },
  tagline: {
    fontSize: 11,
    color: 'gray',
  },
  product: {
    borderWidth: 1,
    borderColor: '#ffffff',
    backgroundColor: 'white',
    flexDirection: 'row',
    marginVertical: 10,
    paddingRight: 20,
    elevation: 5,
  },
  prodtImg: {
    width: '40%',
    justifyContent: 'center',
  },
  img: {
    width: 150,
    height: 150,
    padding: 10,
  },
  proddetail: {
    width: '50%',
    marginLeft: 40,
    marginRight: 4,
  },
  spons: {
    fontSize: 11,
    color: 'grey',
    marginBottom: 10,
  },
  det: {
    fontSize: 12,
    color: 'black',
    lineHeight: 18,
  },
  rowdet: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  rating: {
    color: '#69a3b3',
    fontSize: 10,
    marginRight: 5,
  },
  count: {
    color: '#69a3b3',
    fontSize: 10,
    marginLeft: 5,
  },
  price: {
    color: 'black',
    fontSize: 16,
  },
  crossprice: {
    fontSize: 10,
    color: 'grey',
    textDecorationLine: 'line-through',
  },
  mrp: {
    fontSize: 10,
    color: 'grey',
    marginHorizontal: 5,
  },
  cash: {
    fontSize: 9,
    marginVertical: 2,
  },
});
