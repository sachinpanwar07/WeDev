import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Routes from './src/Navigation/Routes';
import Home from './src/Screen/homeScreen/Home';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import imagePath from './src/constants/imagePath';
const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    
    </Provider>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
