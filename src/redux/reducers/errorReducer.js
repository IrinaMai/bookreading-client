import { createReducer } from '@reduxjs/toolkit';
import authActions from '../actions/authActions';
import { postBookRequest, postBookError} from "../actions/bookAction";
import trainingActions from '../actions/trainingActions';

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

  [trainingActions.addTrainingError]: (_, { payload }) => payload,
  [trainingActions.addResultsError]: (_, { payload }) => payload,
  
  [trainingActions.addTrainingRequest]: () => null,
  [trainingActions.addResultsRequest]: () => null,
});

export default errorReducer;
