import { View, Text, StyleSheet, useAnimatedValue } from 'react-native'
import React, { useState } from 'react'
import WraperContainer from '../Components/WraperContainer'
import strings from '../../constants/lang'
import TextInputCompo from '../Components/TextInputCompo'
import { moderateScaleVertical, textScale } from '../../styles/responsive'
import color from '../../styles/color'
import ButtonComponent from '../Components/ButtonComponent'
import HeaderCompo from '../Components/HeaderCompo'
const Signup = () => {
  const [username,setUsername]=useState('');
  const [fullname,setFullname]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('')
  const [secureText,setSecuretext]=useState(true)
  const [confirmPass,setConfirmPass]=useState('')
  return (
   <WraperContainer>
    <HeaderCompo/>
   <View style={{flex:1 ,}}>
    <View style={{flex:0.8,}}>
    <Text style={styles.headerStyle}>{strings.CREATE_NEW_ACCOUNT}</Text>
     <Text style={styles.decStyle}>{strings.CREATE_AN_ACCOUNT_SO_YOU_CAN_CONTINUE}</Text>
     <TextInputCompo
     value={username}
     placeholder={strings.USERNAME}
      onChangeText={(value)=>setUsername(value)}
     />
         <TextInputCompo
     value={fullname}
     placeholder={strings.FULL_NAME}
      onChangeText={(value)=>setFullname(value)}
     />

     <TextInputCompo
     value={email}
     placeholder={strings.EMAIL}
      onChangeText={(value)=>setEmail(value)}
     />
    
    
     <TextInputCompo
     placeholder={strings.PASSWORD}
      value={password}
      onChangeText={(value)=>setPassword(value)}
       secureTextEntry={secureText}
      secureText={secureText?strings.SHOW:strings.HIDE}
      onPressSecure={()=>setSecuretext(!secureText)}
    />
    
       
    <TextInputCompo
     placeholder={strings.CONFIRM_PASS}
      value={confirmPass}
      onChangeText={(value)=>setConfirmPass(value)}
       secureTextEntry={secureText}
      secureText={secureText?strings.SHOW:strings.HIDE}
      onPressSecure={()=>setSecuretext(!secureText)}
    />
    
   <View>
    <Text/>
    <Text style={{...styles.decStyle,
    alignSelf:'flex-end',
    color:color.blueColor
    }} >{strings.FORGOT_PASS}</Text>
   </View>
   </View>
   <View style={{flex:0.2,justifyContent:'flex-end'}}>
   <ButtonComponent
   text={strings.SIGN_UP}
   />
   </View>
   
   </View>
   </WraperContainer>
  )
}

const styles=StyleSheet.create({
  headerStyle:{
    fontSize:textScale(24),
    color:color.whiteColor,
    marginTop:moderateScaleVertical(12)
  },
  decStyle:{
    fontSize:textScale(12),
    color:color.whiteColorOpacity70,
    marginTop:moderateScaleVertical(8),
    marginBottom:moderateScaleVertical(52)
  }
})
export default Signup