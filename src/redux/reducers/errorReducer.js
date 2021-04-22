import { createReducer } from '@reduxjs/toolkit';
import authActions from '../actions/authActions';
import { postBookRequest, postBookSuccess, postBookError} from "../actions/bookAction";

const errorReducer = createReducer(null, {
  [authActions.registerError]: (_, { payload }) => payload,
  [authActions.loginError]: (_, { payload }) => payload,
  [authActions.logOutError]: (_, { payload }) => payload,
  [authActions.getCurrentUserError]: (_, { payload }) => payload,

  [authActions.registerRequest]: () => null,
  [authActions.loginRequest]: () => null,
  [authActions.logOutRequest]: () => null,
  [authActions.getCurrentUserRequest]: () => null,

  [postBookError]: (_, {payload}) => payload,
  [postBookRequest]: () => null,
});

export default errorReducer;
