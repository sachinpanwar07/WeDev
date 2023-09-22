import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import color from '../../styles/color'

const ButtonComponent = ({onPress=()=>{},
text='',
style={},
textStyle={},
leftimg=null
}) => {
  return (
   <TouchableOpacity style={{...styles.container,...style}}
   onPress={onPress}
   >
    {!!leftimg?<Image source={leftimg} style={{width:30,height:30,}}/>:<View/>}
    <Text style={{...styles.textStyle,...textStyle}}>{text}</Text>
    <View/>
   </TouchableOpacity>
  )
}

export default ButtonComponent

const styles = StyleSheet.create({
container:{
    backgroundColor:color
    .redColor,
    height:42,
    justifyContent:'space-between',
    alignItems:"center",
   borderRadius:10,
   flexDirection:'row',
   paddingHorizontal:15
  
},
textStyle:{
    fontSize:16,
    color:'white',
    fontWeight:'700',
    textAlign:'center',
    padding:10,
   
} 
})