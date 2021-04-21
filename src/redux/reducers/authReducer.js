import { combineReducers, createReducer } from '@reduxjs/toolkit';
import authActions from '../actions/authActions';

const initialState = { email: '', id: '' };

const userReducer = createReducer(initialState, {
  [authActions.loginSuccess]: (_, { payload }) => payload.user,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => ({
    email: payload.email,
    id: payload.id,
  }),
  [authActions.logOutSuccess]: () => initialState,
});
const tokenReducer = createReducer(null, {
  [authActions.loginSuccess]: (_, { payload }) => payload.token,
  [authActions.refreshSuccess]: (_, { payload }) => payload.token,
  [authActions.logOutSuccess]: () => null,
  [authActions.refreshError]: () => null,
});

const authReducer = combineReducers({
  user: userReducer,
  token: tokenReducer,
});

export default authReducer;
