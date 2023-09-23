import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {moderateScale} from '../../styles/responsive';
import imagePath from '../../constants/imagePath';
import {useNavigation} from '@react-navigation/native';

const HeaderCompo = ({onPressLeft}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={!!onPressLeft ? onPressLeft : () => navigation.goBack()}>
        <Image
          source={imagePath.ic_back}
          style={{
            width: moderateScale(20),
            height: moderateScale(20),
         
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
