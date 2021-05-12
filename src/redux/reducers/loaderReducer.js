import { createReducer } from '@reduxjs/toolkit';
import authActions from '../actions/authActions';
import { postBookRequest, postBookSuccess, postBookError,   patchBookRequest,
  patchBookSuccess,   patchBookError,} from "../actions/bookAction";

const loaderReducer = createReducer(false, {
  [authActions.registerRequest]: () => true,
  [authActions.registerSuccess]: () => false,
  [authActions.registerError]: () => false,

  [authActions.loginRequest]: () => true,
  [authActions.loginSuccess]: () => false,
  [authActions.loginError]: () => false,

  [postBookRequest]: () => true,
  [postBookSuccess]: () => false,
  [postBookError] : () => false,

  [patchBookRequest]: () => true,
  [patchBookSuccess]: () => false,
  [patchBookError]: () => false,

});

export default loaderReducer;
