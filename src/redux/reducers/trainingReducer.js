import { createReducer } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { addBook, deleteBook } from '../actions/trainingActions'

const initialState = {
  hardcodeBooks: [
    {
      id: '1',
      title: 'Scrum. Революционный метод ',
      author: 'Джефф Сазерленд',
      year: '2014',
      pages: 15,
    },
    {
      id: '2',
      title: 'Deadline. Роман об управлении',
      author: 'Том ДеМарко',
      year: '2006',
      pages: 188,
    },
    {
      id: '3',
      title: '5 Пороков команды. Притчи о лидерстве.',
      author: 'Патрик Ленсиони',
      year: '2011',
      pages: 125,
    },
    {
      id: '4',
      title: 'React',
      author: 'Том ДеМарко',
      year: '2018',
      pages: 188,
    },
    {
      id: '5',
      title: 'Node JS',
      author: 'Патрик Ленсиони',
      year: '2019',
      pages: 125,
    },
  ],
  booksList: [],
}

export const bookReducer = createReducer(
  { ...initialState },
  {
    [addBook]: (state, { payload }) => ({
      ...state,
      booksList: [
        ...state.booksList,
        {
          id: payload.id,
          title: payload.title,
          author: payload.author,
          year: payload.year,
          pages: payload.pages,
        },
      ],
    }),
    [deleteBook]: (state, { payload }) => ({
      ...state,
      booksList: [...state.booksList.filter(item => item.id !== payload)],
    }),
  }
)

const trainingReducer = combineReducers({
  books: bookReducer,
})

export default trainingReducer
