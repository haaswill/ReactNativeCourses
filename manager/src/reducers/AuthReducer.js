import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      // make new object, take all properties from state, then define property email and toss
      // into the new object, if there is a property of the same name override that property
      // with the new one created
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload, error: '' };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed.', password: '' };
    default:
      return state;
  }
};
