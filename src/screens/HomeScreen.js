import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import SubCoder from '../components/SubCoder';
import Category from '../components/Category';
import Carousal from '../components/Carousal';
import Service from '../components/Service';
import Deals from '../components/Deals';
import Brands from '../components/Brands';

const HomeScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header />
      <SubCoder />
      <Category />
      <Carousal />
      <Service />
      <Deals />
      <Brands />
    </ScrollView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({});
