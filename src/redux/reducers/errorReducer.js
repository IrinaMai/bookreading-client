import { createReducer } from '@reduxjs/toolkit';
import authActions from '../actions/authActions';

const errorReducer = createReducer(null, {
  [authActions.registerError]: (_, { payload }) => payload,
  [authActions.loginError]: (_, { payload }) => payload,
  [authActions.logOutError]: (_, { payload }) => payload,
  [authActions.getCurrentUserError]: (_, { payload }) => payload,

  [authActions.registerRequest]: () => null,
  [authActions.loginRequest]: () => null,
  [authActions.logOutRequest]: () => null,
  [authActions.getCurrentUserRequest]: () => null,
});

export default errorReducer;
