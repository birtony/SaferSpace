import * as types from '../../actions/types';

const INITIAL_STATE = {
  login_username: '',
  login_password: '',
  signup_username: '',
  signup_password: '',
  logged_in: false,
  token: '',
  name: '',
  date_of_birth: '',
  gender: '',
  drugs: {
    opioids: false,
    coke: false,
    xanax: false
  },
  last_use: ''
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
      console.log('LOGEDIN');
      return {...state, logged_in: true, token: action.payload};
    case types.NAME_CHANGED:
      return {...state, name: action.payload};
    case types.DATE_OF_BIRTH_CHANGED:
      return {...state, date_of_birth: action.payload};
    case types.GENDER_CHANGED:
      return {...state, gender: action.payload};
    case types.LOCATION_CHANGED:
      return {...state, location: action.payload};
    case types.DRUG_CHANGED:
      return {...state, drugs: {...state.drugs, [action.payload.drug]: !state.drugs[action.payload.drug]}};
    case types.LAST_USAGE_CHANGED:
      return {...state, last_use: action.payload};
    default:
      return state;
  }
};

export default reducer;