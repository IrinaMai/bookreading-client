import { createAction } from '@reduxjs/toolkit'

const addBook = createAction('trainingBooksList/addBook')
const deleteBook = createAction('trainingBooksList/deleteBook')
const setStartDate = createAction('trainingBeforeStart/setStartDate')
const setFinishDate = createAction('trainingBeforeStart/setFinishDate')
const addTrainingRequest = createAction('training/addTrainingRequest');
const addTrainingSuccess = createAction('training/addTrainingSuccess');
const addTrainingError = createAction('training/addTrainingError');

const trainingActions = {
  addBook,
  deleteBook,
  setStartDate,
  setFinishDate,
  addTrainingRequest,
  addTrainingSuccess,
  addTrainingError,
}
export default trainingActions
