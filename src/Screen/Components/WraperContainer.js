import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { Children } from 'react'
import color from '../../styles/color'
import { useSelector } from 'react-redux'

const WraperContainer = ({
    style={},
    children
}) => {
  const isDarkTheme=useSelector(state=>state?.AppSetting?.isDark || true)
  return (
    <View style={{...styles.container,...style,
      backgroundColor:true? color.themeColor:color.whiteColor
  
    }}>
    <SafeAreaView style={{flex:1}}>
     {children}
    </SafeAreaView>
    </View>
  )
}

export default WraperContainer

const styles = StyleSheet.create({
    container:{
      flex:1,
       backgroundColor:color.themeColor
    }
})