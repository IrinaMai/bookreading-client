import { createReducer } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { addBook } from '../actions/trainingActions'

const initialState = {
  hardcodeBooks: [
    {
      id: '1',
      name: 'Scrum. Революционный метод',
      author: 'Джефф Сазерленд',
      year: '2014',
      numberOfPages: 15,
    },
    {
      id: '2',
      name: 'Deadline. Роман об управлении',
      author: 'Том ДеМарко',
      year: '2006',
      numberOfPages: 188,
    },
    {
      id: '3',
      name: '5 Пороков команды. Притчи о лидерстве.',
      author: 'Патрик Ленсиони',
      year: '2011',
      numberOfPages: 125,
    },
  ],
  booksList: [],
}

export const bookReducer = createReducer(
  { ...initialState },
  {
    [addBook]: (state, { payload }) => ({
      ...state,
      booksList: [...state.booksList, payload],
    }),
  }
)

const trainingReducer = combineReducers({
  books:bookReducer,
})

export default trainingReducer
