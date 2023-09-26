import {View, Text, Button, Image, StyleSheet} from 'react-native';
import React from 'react';
import Login from '../LoginScreen/Login';
import NavigationString from '../../Navigation/NavigationString';
import {saveUserData} from '../../redux/reducers/auth';
import store from '../../redux/store';
import WraperContainer from '../Components/WraperContainer';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import ButtonComponent from '../Components/ButtonComponent';
import color from '../../styles/color';
import {moderateScale} from '../../styles/responsive';
import {textScale} from '../../styles/responsive';
import TextCompo from '../Components/TextCompo';
import { useSelector } from 'react-redux';
imagePath;
const {dispatch} = store;

const InitialScreen = ({navigation}) => {
  const onLogin = () => {
    dispatch(saveUserData({isLogin: true}));
  };

  const onPressTerm = (type = 1) => {
    if (type == 1) {
      alert('Terms');
    } else {
      alert('Privacy');
    }
  };
  const isDarkTheme = useSelector(state => state?.AppSetting?.isDark);
  return (
    <WraperContainer>
      <View style={{padding: moderateScale(12), alignItems: 'center', flex: 1}}>
        <View style={{flex: 0.3, justifyContent: 'flex-start'}}>
        <Image source={imagePath.imgApp} style={styles.imagelogo} />
        </View>

        <View style={{flex: 0.7, justifyContent: 'flex-end'}}>
          <TextCompo
          text={strings.BY_CLICKING_LOG_IN}
            style={{
             

              marginVertical: moderateScale(42),
            }}>
            

            <Text
              onPress={() => {
                onPressTerm(1);
              }}>
              {strings.TERMS}
            </Text>
            <Text>
              {strings.LEARN_HOW_WE_PROCESS}
              <Text onPress={() => onPressTerm(1)} style={{}}>
                {strings.PRIVACY_POLICY}
              </Text>
            </Text>
          </TextCompo>

          <ButtonComponent text={strings.LOG_IN_WITH_PHONE}
          onPress={()=>navigation.navigate(NavigationString.LOGIN)}
          />
          {/* <Text
            style={{
              ...styles.textStyle,
              marginVertical: moderateScale(12),
              textAlign: 'center',
              color: color.whiteColor,
            }}>
            {strings.OR}
          </Text> */}
          <TextCompo text={strings.OR} style={{textAlign:'center',marginVertical:moderateScale(12)}}/>
          <ButtonComponent
            text={strings.LOGIN_WITH_GOOGLE}
            textStyle={{color: color.blackColor}}
            style={{
              backgroundColor: isDarkTheme? color.whiteColor:color.gray4,
              marginVertical: moderateScale(16),
            }}
            leftimg={imagePath.ic_google}
          />
          <ButtonComponent
            text={strings.LOGIN_WITH_FACEBOOK}
            textStyle={{color: color.blackColor}}
            style={{
              backgroundColor: isDarkTheme? color.whiteColor:color.gray4,
              marginVertical: moderateScale(16),
            }}
            leftimg={imagePath.ic_faceBook}
          />
          <TextCompo
            style={{
              ...styles.textStyle,
              color: color.whiteColor,
              textAlign: 'center',
            }}>
            {strings.NEW_HERE}
            <Text style={{...styles.textStyle, color: color.blueColor}}
             onPress={()=>navigation.navigate(NavigationString.SIGNUP_SCREEN)}
            >
              {strings.SIGN_UP}
            </Text>
          </TextCompo>
        </View>
      </View>
    </WraperContainer>
  );
};
const styles = StyleSheet.create({
  imagelogo: {
    width: moderateScale(150),
    height: moderateScale(150),
    borderRadius: moderateScale(150 / 2),
  },
  textStyle: {
    fontSize: textScale(16),
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
  },
});
export default InitialScreen;
