import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';

const Signin = ({navigation}) => {
  // Add navigation as a prop
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onRegister = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('Signin');
        navigation.navigate('Login');
      })
      .catch(error => {
        if (error.code == 'auth/email-already-in-use') {
          Alert.alert('The email address is already used');
        }
        if (error.code === 'auth/invalid-email') {
          Alert.alert('The email address is invalid');
        }
      });
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.top}>Sign up Screen</Text>
      <Image source={require('../assests/bag.png')} style={styles.img} />
      <TextInput
        placeholder="Email"
        style={styles.inputtxt}
        value={email}
        onChangeText={txt => setEmail(txt)}
      />
      <TextInput
        placeholder="Password"
        style={styles.inputtxt}
        value={password}
        onChangeText={txt => setPassword(txt)}
        secureTextEntry
      />
      <TouchableOpacity style={styles.btn} onPress={onRegister}>
        <Text style={styles.reg}>Register</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  img: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 20,
    borderWidth: 0.3,
    borderRadius: 50,
    borderColor: 'grey',
    marginBottom: 20,
  },
  top: {
    alignSelf: 'center',
    fontSize: 25,
    color: 'black',
  },
  inputtxt: {
    width: '90%',
    paddingHorizontal: 20,
    marginLeft: 20,
    borderRadius: 20,
    marginTop: 10,
    elevation: 5,
    padding: 10,
    backgroundColor: 'white',
  },
  btn: {
    width: '50%',
    backgroundColor: 'orange',
    marginTop: 20,
    alignSelf: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
  },
  reg: {
    color: 'white',
    fontSize: 20,
  },
});
