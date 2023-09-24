import { FORGOT_PASSWORD, LOGIN_API, SIGNUP_API } from '../../config/urls';
import { changeLang } from '../reducers/Appsetting';

import { saveUserData } from '../reducers/auth';
import store from '../store';
import types from '../types';
const { dispatch } = store;



export const changeLanguage = (data) => {
  dispatch(changeLang(data)); 
 
};



export const changeTheme = (data) => {
    dispatch(changeTheme(data)); 
   
  };
  