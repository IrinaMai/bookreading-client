import { createAction } from '@reduxjs/toolkit'

const addBook = createAction('trainingBooksList/addBook')
const deleteBook = createAction('trainingBooksList/deleteBook')
const setStartDate = createAction('trainingBeforeStart/setStartDate')
const setFinishDate = createAction('trainingBeforeStart/setFinishDate')
const addTrainingRequest = createAction('training/addTrainingRequest');
const addTrainingSuccess = createAction('training/addTrainingSuccess');
const addTrainingError = createAction('training/addTrainingError');
const addResultsRequest = createAction('training/ResultsRequest');
const addResultsSuccess = createAction('training/ResultsSuccess');
const addResultsError = createAction('training/ResultsError');


const trainingActions = {
  addBook,
  deleteBook,
  setStartDate,
  setFinishDate,
  addTrainingRequest,
  addTrainingSuccess,
  addTrainingError,
  addResultsRequest,
  addResultsSuccess,
  addResultsError,
}
export default trainingActions
