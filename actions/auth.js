import axios from 'axios';
import * as types from './types';
import {HOST, PORT} from "../const/config";

export const login_username_chaged = username => ({
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
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  console.log(response.json());
};

export const signup = () => async (dispatch, getState) => {
  const {signup_username, signup_password} = getState().auth;
  const url = `${HOST}/api/users/create`;
  const data = {
    username: signup_username,
    password: signup_password,
    passwordConfirm: signup_password
  };
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const token = response.json()['_55'].token;
    dispatch({
      type: types.LOGGED_IN,
      payload: token
    })
  } catch {
    Alert.alert('Error', "Error logging in. Please check your credentials and try again");
  }
  console.log(response.json());
};