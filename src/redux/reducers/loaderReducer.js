import { createReducer } from '@reduxjs/toolkit';
import authActions from '../actions/authActions';
import { postBookRequest, postBookSuccess, postBookError} from "../actions/bookAction";

const loaderReducer = createReducer(false, {
  [authActions.registerRequest]: () => true,
  [authActions.registerSuccess]: () => false,
  [authActions.registerError]: () => false,

  [authActions.loginRequest]: () => true,
  [authActions.loginSuccess]: () => false,
  [authActions.loginError]: () => false,

  [postBookRequest]: () => true,
  [postBookSuccess]: () => false,
  [postBookError] : () => false

});

export default loaderReducer;
