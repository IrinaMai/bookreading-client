import { createReducer } from '@reduxjs/toolkit';
import authActions from '../actions/authActions';

const loaderReducer = createReducer(false, {
  [authActions.registerRequest]: () => true,
  [authActions.registerSuccess]: () => false,
  [authActions.registerError]: () => false,

  [authActions.loginRequest]: () => true,
  [authActions.loginSuccess]: () => false,
  [authActions.loginError]: () => false,
});

export default loaderReducer;
