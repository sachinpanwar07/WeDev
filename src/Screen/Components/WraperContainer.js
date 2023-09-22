import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { Children } from 'react'
import color from '../../styles/color'

const WraperContainer = ({
    style={},
    children
}) => {
  return (
    <View style={{...styles.container,...style}}>
    <SafeAreaView>
     {children}
    </SafeAreaView>
    </View>
  )
}

export default WraperContainer

const styles = StyleSheet.create({
    container:{
      flex:1,
        backgroundColor:color.blackColor,
      
    }
})