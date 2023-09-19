import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Routes from './src/Navigation/Routes';
import Home from './src/Screen/homeScreen/Home';
import {Provider} from 'react-redux';
import store from './src/redux/store';
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
