import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const Header = () => {
  return (
    <View>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 0}}
        colors={['#7ea0de', '#b6cbf2', '#cbdaf5']}
        style={styles.container}>
        <View style={styles.input}>
          <View style={styles.row}>
            <Ionicons name="search" size={22} color="black" />
            <TextInput
              placeholder="Seach Products.in"
              placeholderTextColor={'gray'}
              style={styles.txt}
            />
          </View>

          <AntDesign name="scan1" size={22} color="gray" />
        </View>

        <Feather name="mic" size={20} color="black" />
      </LinearGradient>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    backgroundColor: 'white',
    width: '90%',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txt: {
    padding: 8,
  },
});
