import {
  Image,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {categories} from '../data/Categories';
import {useNavigation} from '@react-navigation/native';

const Category = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      style={styles.container}>
      {categories.map(item => {
        return (
          <TouchableOpacity
            style={styles.categ}
            onPress={() => {
              navigation.navigate('Signin');
            }}>
            <Image source={item.image} style={styles.img} />
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    elevation: 5,
  },
  img: {
    width: 45,
    height: 45,
  },
  title: {
    fontSize: 10,
    color: 'green',
  },
  categ: {
    paddingHorizontal: 5,
    alignItems: 'center',
  },
});
