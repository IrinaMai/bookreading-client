import { createAction } from '@reduxjs/toolkit'

const addBook = createAction('trainingBooksList/addBook')
const deleteBook = createAction('trainingBooksList/deleteBook')
const setStartDate = createAction('trainingBeforeStart/setStartDate')
const setFinishDate = createAction('trainingBeforeStart/setFinishDate')

const trainingActions = {
  addBook,
  deleteBook,
  setStartDate,
  setFinishDate,
}
export default trainingActions
