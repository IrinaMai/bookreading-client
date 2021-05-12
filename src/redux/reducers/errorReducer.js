import { createReducer } from '@reduxjs/toolkit';
import authActions from '../actions/authActions';
import { postBookRequest, postBookError, patchBookRequest, patchBookError} from "../actions/bookAction";
import trainingActions from '../actions/trainingActions';

const errorReducer = createReducer(null, {
  [authActions.registerError]: (_, { payload }) => payload,
  [authActions.loginError]: (_, { payload }) => payload,
  [authActions.logOutError]: (_, { payload }) => payload,
  [authActions.getCurrentUserError]: (_, { payload }) => payload,
  [authActions.refreshError]: (_, { payload }) => payload.message,

  [authActions.registerRequest]: () => null,
  [authActions.loginRequest]: () => null,
  [authActions.logOutRequest]: () => null,
  [authActions.getCurrentUserRequest]: () => null,
  [authActions.refreshRequest]: () => null,

  [postBookError]: (_, {payload}) => payload,
  [patchBookError]: (_, {payload}) => payload,
  [postBookRequest]: () => null,
  [patchBookRequest]: () => null,

  [trainingActions.addTrainingError]: (_, { payload }) => payload,
  [trainingActions.addResultsError]: (_, { payload }) => payload,
  [trainingActions.getTrainingError]: (_, { payload }) => payload,
  
  [trainingActions.addTrainingRequest]: () => null,
  [trainingActions.addResultsRequest]: () => null,
  [trainingActions.getTrainingRequest]: () => null,


});

export default errorReducer;
