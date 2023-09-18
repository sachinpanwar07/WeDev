import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Routes from './src/Navigation/Routes';
import Home from './src/Screen/homeScreen/Home';
const App = () => {
  return (
    <View style={styles.container} >
   <Routes/>
    </View>
  );
};

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    
  }
})

export default App;
