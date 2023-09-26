import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import WraperContainer from '../Components/WraperContainer';
import strings from '../../constants/lang';
import TextInputCompo from '../Components/TextInputCompo';
import {moderateScaleVertical, textScale} from '../../styles/responsive';
import color from '../../styles/color';
import ButtonComponent from '../Components/ButtonComponent';
import HeaderCompo from '../Components/HeaderCompo';
import TextCompo from '../Components/TextCompo';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecuretext] = useState(true);
  return (
    <WraperContainer>
      <HeaderCompo />
      <View style={{flex: 1}}>
        <View style={{flex: 0.8}}>
          <TextCompo text={strings.WelCome_BACk} style={styles.headerStyle} />

          <TextCompo
            text={strings.WE_ARE_HAPPY_TO_SEE}
            style={styles.decStyle}
          />
          <TextInputCompo
            value={email}
            placeholder={strings.EMAIL}
            onChangeText={value => setEmail(value)}
          />

          <TextInputCompo
            placeholder={strings.PASSWORD}
            value={password}
            onChangeText={value => setPassword(value)}
            secureTextEntry={secureText}
            secureText={secureText ? strings.SHOW : strings.HIDE}
            onPressSecure={() => setSecuretext(!secureText)}
          />

          <View>
            <Text />
            <Text
              style={{
                ...styles.decStyle,
                alignSelf: 'flex-end',
                color: color.blueColor,
              }}>
              {strings.FORGOT_PASS}
            </Text>
          </View>
        </View>
        <View style={{flex: 0.2, justifyContent: 'flex-end'}}>
          <ButtonComponent text={strings.LOGIN} />
        </View>
      </View>
    </WraperContainer>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: textScale(24),
    color: color.whiteColor,
    marginTop: moderateScaleVertical(12),
  },
  decStyle: {
    fontSize: textScale(12),
    color: color.whiteColorOpacity70,
    marginTop: moderateScaleVertical(8),
    marginBottom: moderateScaleVertical(52),
  },
});
export default Login;
