import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../../styles/color'
import { useSelector } from 'react-redux'
import { textScale } from '../../styles/responsive'

const TextCompo = ({
    text='',
    style={},
    ...props
}) => {
    // const isDarkTheme=useSelector(state=>state?.AppSetting?.isDark ||true)
     const isDarkTheme=false
  return (
    <View>
      <Text style={{...styles.textStyle,...style,
    color:isDarkTheme?color.whiteColor:color.blackColor
    }}>TextCompo</Text>
    </View>
  )
}

export default TextCompo

const styles = StyleSheet.create({
    textStyle: {
        fontSize: textScale(12),
        color: color.whiteColor,
        
        
      },
})