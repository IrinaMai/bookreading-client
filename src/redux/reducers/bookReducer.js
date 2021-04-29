import { createReducer } from '@reduxjs/toolkit'
import { postBookSuccess } from '../actions/bookAction'
import authActions from '../actions/authActions'
import trainingActions from '../actions/trainingActions'

const initialState = [
  // {title: '',
  // author: '',
  // year: "",
  // pages: "",
  // _id: ""}
]

const bookReducer = createReducer([...initialState], {
  [postBookSuccess]: (state, action) => {
    return [...state, { ...action.payload.data }]
  },
  [authActions.loginSuccess]: (_, { payload }) => payload.user.books,
  [authActions.logOutSuccess]: () => initialState,

  [trainingActions.addTrainingSuccess]: (state, { payload }) =>
    state.map(book => {
      const updatedStatus = payload.books.find(item => item.bookId === book._id)
      return book._id === updatedStatus?.bookId
        ? { ...book, status: updatedStatus?.status }
        : book
    }),
  [trainingActions.addResultsSuccess]: (state, { payload }) => 
      state.map(book => {
        const updatedStatus = payload.books.find(item => item.bookId === book._id)
        return book._id === updatedStatus?.bookId
          ? { ...book, status: updatedStatus?.status }
          : book
      }),
})

export default bookReducer
