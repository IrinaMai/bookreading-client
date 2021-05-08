import { combineReducers, createReducer } from '@reduxjs/toolkit';
import authActions from '../actions/authActions';

const initialState = { email: '', name: '', id: '', books: {} };

const userReducer = createReducer(initialState, {
  [authActions.loginSuccess]: (_, { payload }) => payload.user,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => ({
    email: payload.email,
    name: payload.name,
    id: payload.id,
    books: payload.books,
    activeTraining: payload.activeTraining,
  }),
  [authActions.toggleUserTraining]: (state, _) => ({
    ...state,
    activeTraining: !state.activeTraining,
  }),
  [authActions.logOutSuccess]: () => initialState,
});
const tokenReducer = createReducer(null, {
  [authActions.loginSuccess]: (_, { payload }) => payload.token,
  [authActions.refreshSuccess]: (_, { payload }) => payload.newToken,
  [authActions.logOutSuccess]: () => null,
  [authActions.refreshError]: () => null,
});
const refreshTokenReducer = createReducer(null, {
  [authActions.loginSuccess]: (_, { payload }) => payload.refreshToken,
  [authActions.refreshSuccess]: (_, { payload }) => payload.newRefreshToken,
  [authActions.logOutSuccess]: () => null,
  [authActions.refreshError]: () => null,
});

const authReducer = combineReducers({
  user: userReducer,
  token: tokenReducer,
  refreshToken: refreshTokenReducer,
});

export default authReducer;
