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
const getTrainingRequest = createAction('training/getTrainingRequest');
const getTrainingSuccess = createAction('training/getTrainingSuccess');
const getTrainingError = createAction('training/getTrainingError');
const removeStartData = createAction('training/removeStartData');
const removeActiveTraining = createAction('training/removeActiveTraining');


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
  getTrainingRequest,
  getTrainingSuccess,
  getTrainingError,
  removeStartData,
  removeActiveTraining,
}
export default trainingActions
