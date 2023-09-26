import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {moderateScale} from '../../styles/responsive';
import imagePath from '../../constants/imagePath';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import color from '../../styles/color';
const HeaderCompo = ({onPressLeft}) => {
  const navigation = useNavigation();
  const isDarkTheme = useSelector(state => state?.AppSetting?.isDark);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={!!onPressLeft ? onPressLeft : () => navigation.goBack()}>
        <Image
          source={imagePath.ic_back}
          style={{
            width: moderateScale(25),
            height: moderateScale(20),
            tintColor: isDarkTheme ? color.whiteColor : color.blackColor,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderCompo;

const styles = StyleSheet.create({
  container: {
    height: moderateScale(42),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(16),
  },
});
