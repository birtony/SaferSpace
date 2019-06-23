import * as types from './types';
import {Alert} from 'react-native';
import {HOST, PORT} from "../const/config";

export const login_username_changed = username => ({
  type: types.LOGIN_USERNAME_CHANGED,
  payload: username
});

export const login_password_changed = password => ({
  type: types.LOGIN_PASSWORD_CHANGED,
  payload: password
});

export const signup_username_changed = username => ({
  type: types.SIGNUP_USERNAME_CHANGED,
  payload: username
});

export const signup_password_changed = password => ({
  type: types.SIGNUP_PASSWORD_CHANGED,
  payload: password
});

export const login = () => async (dispatch, getState) => {
  const {login_username, login_password} = getState().auth;
  const url = `${HOST}/api/users/login`;
  const body = {
    username: login_username,
    password: login_password
  };
  console.log(`Sending to ${url}`);
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    console.log('Dispatching event...');
    const data = await response.json();
    console.log(data);
    const token = data.token;

    dispatch({
      type: types.LOGGED_IN,
      payload: token
    });
  } catch (e){
    console.log(e);
    Alert.alert('Error', 'Bad username/password. Please double check and try again');
  }
};

export const signup = () => async (dispatch, getState) => {
  const {signup_username, signup_password} = getState().auth;
  const url = `${HOST}/api/users/create`;
  const data = {
    username: signup_username,
    password: signup_password,
    passwordConfirm: signup_password
  };
  let response;
  try {
    response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  }
  catch {
    Alert.alert('Error', "Error logging in. Please check your credentials and try again");
    return null;
  }

  console.log(response.json());
};

export const name_changed = name => ({
  type: types.NAME_CHANGED,
  payload: name
});

export const gender_changed = gender => ({
  type: types.GENDER_CHANGED,
  payload: gender
});

export const location_changed = location => ({
  type: types.LOCATION_CHANGED,
  payload: location
});

export const date_of_birth_changed = dob => ({
  type: types.DATE_OF_BIRTH_CHANGED,
  payload: dob
});

export const drug_changed = (drug) => ({
  type: types.DRUG_CHANGED,
  payload: {drug}
});

export const last_usage_changed = last_usage => ({
  type: types.LAST_USAGE_CHANGED,
  payload: last_usage
});

export const update_user = () => async (dispatch, getState) => {
  const {token, name, date_of_birth, gender, drugs, last_use, location, login_username} = getState().auth;

  const url = `${HOST}/api/users/${login_username}/update`;
  const data = {
    firstName: name,
    birthDate: date_of_birth,
    gender,
    drugs,
    lastUse: last_use,
    city: location,
    complete: true
  };
  const headers = {
    jwt: token,
    Accept: 'application/json',
    'Content-Type': 'application/json'
  };

  const response = await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers
  });
  console.log(response);
  const responseData = await response.json();
  console.log(responseData);
};