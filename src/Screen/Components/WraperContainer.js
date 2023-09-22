import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { Children } from 'react'
import color from '../../styles/color'

const WraperContainer = ({
    style={},
    Children
}) => {
  return (
    <View style={{...styles.container,...style}}>
    <SafeAreaView>
     {Children}
    </SafeAreaView>
    </View>
  )
}

export default WraperContainer

const styles = StyleSheet.create({
    container:{
      
        backgroundColor:color.whiteColor,
        justifyContent:'center',
        alignItems:'center'
    }
})