import {View, Text, StatusBar} from 'react-native';
import React from 'react';

import Router from './src/navigation/Router';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={'#c0d5fc'} barStyle={'dark-content'} />
      <Router />
    </>
  );
};

export default App;
