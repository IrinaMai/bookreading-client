import { createReducer } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import trainingActions from '../actions/trainingActions'

const startInitialState = {
  startDate: '',
  finishDate: '',
  booksList: [],
}

export const bookReducer = createReducer(
  { ...startInitialState },
  {
    [trainingActions.addBook]: (state, { payload }) => ({
      ...state,
      booksList: [
        ...state.booksList,
        {
          _id: payload._id,
          title: payload.title,
          author: payload.author,
          year: payload.year,
          pages: payload.pages,
          status: payload.status,
        },
      ],
    }),
    [trainingActions.deleteBook]: (state, { payload }) => ({
      ...state,
      booksList: [...state.booksList.filter(item => item._id !== payload)],
    }),
    [trainingActions.setStartDate]: (state, { payload }) => ({
      ...state,
      startDate: payload,
    }),
    [trainingActions.setFinishDate]: (state, { payload }) => ({
      ...state,
      finishDate: payload,
    }),
  }
)
const activeInitialState = {
  _id: '',
  startDate: '',
  finishDate: '',
  books: [],
  pagesRead: 0,
  pagesTotal: 0,
  progress: [],
}

const startTrainingReducer = createReducer(
  { ...activeInitialState },
  {
    [trainingActions.addTrainingSuccess]: (state, { payload }) => ({
      _id: payload._id,
      startDate: payload.startDate,
      finishDate: payload.finishDate,
      books: payload.books,
      pagesRead: payload.pagesRead,
      pagesTotal: payload.pagesTotal,
      progress: payload.progress,
    }),

    [trainingActions.addResultsSuccess]: (state, { payload }) => ({
      ...state,
      books: payload.books,
      pagesRead: payload.pagesRead,
      progress: payload.progress,
    }),

    [trainingActions.getTrainingSuccess]: (state, { payload }) => ({
      ...payload,
    }),
  }
)

const trainingReducer = combineReducers({
  beforeStart: bookReducer,
  active: startTrainingReducer,
})

export default trainingReducer
