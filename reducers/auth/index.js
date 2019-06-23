import * as types from '../../actions/types';

const INITIAL_STATE = {
  login_username: '',
  login_password: '',
  signup_username: '',
  signup_password: '',
  logged_in: false,
  token: ''
};

const reducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOGIN_USERNAME_CHANGED:
      return {...state, login_username: action.payload};
    case types.LOGIN_PASSWORD_CHANGED:
      return {...state, login_password: action.payload};
    case types.SIGNUP_USERNAME_CHANGED:
      return {...state, signup_username: action.payload};
    case types.SIGNUP_PASSWORD_CHANGED:
      return {...state, signup_password: action.payload};
    case types.LOGGED_IN:
      return {...state, logged_in: true, token: action.payload};
    default:
      return state;
  }
};

export default reducer;