import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import strings from '../../constants/lang';
const Home = () => {
  return (
    <View style={styles.HomeContainer}>
      
      <Text>{strings.HOME}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  HomeContainer: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
});
export default Home;
