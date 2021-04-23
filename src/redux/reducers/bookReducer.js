import { createReducer } from '@reduxjs/toolkit';
import { postBookSuccess } from '../actions/bookAction';
import authActions from '../actions/authActions';

const initialState = [
  // {title: '',
  // author: '',
  // year: "",
  // pages: "",
  // _id: ""}
];

const bookReducer = createReducer([...initialState], {
  [postBookSuccess]: (state, action) => {
    return [...state, { ...action.payload.data }];
  },
  [authActions.loginSuccess]: (_, { payload }) => payload.user.books,
});

export default bookReducer;
