import { View, Text, Button } from 'react-native'
import React from 'react'
import Login from '../LoginScreen/Login'
import NavigationString from '../../Navigation/NavigationString'
import { saveUserData } from '../../redux/reducers/auth'
import store from '../../redux/store'
const {dispatch}=store;

const InitialScreen = ({navigation}) => {
  const onLogin=()=>{
    dispatch(saveUserData({isLogin:true}))

  }
  return (
    <View>
      <Text >initialScreen</Text>
     <Button onPress={onLogin} title='login'/>
    </View>
  )
}

export default InitialScreen