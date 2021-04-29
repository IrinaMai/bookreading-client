import { createReducer } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import trainingActions from '../actions/trainingActions'

const startInitialState = {
  hardcodeBooks: [
    {
      _id: '1',
      title: 'Scrum. Революционный метод ',
      author: 'Джефф Сазерленд',
      year: '2014',
      pages: 15,
      status: 'WillRead',
    },
    {
      _id: '2',
      title: 'Deadline. Роман об управлении',
      author: 'Том ДеМарко',
      year: '2006',
      pages: 188,
      status: '',
    },
    {
      _id: '3',
      title: '5 Пороков команды. Притчи о лидерстве.',
      author: 'Патрик Ленсиони',
      year: '2011',
      pages: 125,
      status: 'WillRead',
    },
    {
      _id: '4',
      title: 'React',
      author: 'Том ДеМарко',
      year: '2018',
      pages: 188,
      status: '',
    },
    {
      _id: '5',
      title: 'Node JS',
      author: 'Патрик Ленсиони',
      year: '2019',
      pages: 125,
      status: '',
    },
  ],
  booksList: [],
  startDate: '',
  finishDate: '',
  booksCount: 0,
  daysCount: 0,
  // test param delete and add from new state
  activeTraining: {},
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
      pagesRead: payload.pagesRead,
      progress: payload.progress,
    }),

    [trainingActions.getTrainingSuccess]:(state, { payload }) => ({
      ...payload
    })
  }
)

const trainingReducer = combineReducers({
  beforeStart: bookReducer,
  active: startTrainingReducer,
})

export default trainingReducer
