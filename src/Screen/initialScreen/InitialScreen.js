import { View, Text, Button, Image, StyleSheet } from 'react-native'
import React from 'react'
import Login from '../LoginScreen/Login'
import NavigationString from '../../Navigation/NavigationString'
import { saveUserData } from '../../redux/reducers/auth'
import store from '../../redux/store'
import WraperContainer from '../Components/WraperContainer'
import imagePath from '../../constants/imagePath'
imagePath
const {dispatch}=store;

const InitialScreen = ({navigation}) => {
  const onLogin=()=>{
    dispatch(saveUserData({isLogin:true}))

  }
  return (
    <WraperContainer>
      <Image  source={imagePath.imgApp} style={styles.imagelogo}/>
    </WraperContainer>
  )
}
 const styles = StyleSheet.create({
   imagelogo:{
   
   }
 })
export default InitialScreen