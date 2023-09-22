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
  return (
    <WraperContainer>
      <View
        style={{padding: 16, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={imagePath.imgApp} style={styles.imagelogo} />

        <View>
          <Text style={{fontSize: 15, fontWeight: '700', textAlign: 'center'}}>
            {strings.BY_CLICKING_LOG_IN}{' '}
            <Text
              onPress={() => {
                onPressTerm(1);
              }}>
              {strings.TERMS}
            </Text>
            <Text>
              {strings.LEARN_HOW_WE_PROCESS}{' '}
              <Text onPress={() => onPressTerm(1)}>
                {strings.PRIVACY_POLICY}
              </Text>
            </Text>
          </Text>
          <ButtonComponent text={strings.LOG_IN_WITH_PHONE} />
          <Text style={{...styles.textStyle, marginVertical: 16}}>
            {strings.OR}
          </Text>
          <ButtonComponent
            text={strings.LOGIN_WITH_GOOGLE}
            textStyle={{color: color.blackColor}}
            style={{backgroundColor: color.whiteColor, marginVertical: 16}}
             leftimg={imagePath.ic_google}
          />
          <ButtonComponent
            text={strings.LOGIN_WITH_FACEBOOK}
            textStyle={{color: color.blackColor}}
            style={{backgroundColor: color.whiteColor, marginVertical: 16}}
            leftimg={imagePath.ic_faceBook }
          />
        </View>
      </View>
    </WraperContainer>
  );
};
const styles = StyleSheet.create({
  imagelogo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 1,
    backgroundColor: 'blue',
  },
  textStyle: {
    fontSize: 16,
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
    padding: 10,
    justifyContent: 'space-between',
  },
});
export default InitialScreen;
