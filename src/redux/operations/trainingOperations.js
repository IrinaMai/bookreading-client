import axios from 'axios'
import trainingActions from '../actions/trainingActions'

const addTrainingOperation = (
  startDate,
  finishDate,
  books
) => async dispatch => {
  dispatch(trainingActions.addTrainingRequest())
  try {
    const response = await axios.post('/training', {
      startDate,
      finishDate,
      books,
    })
    dispatch(trainingActions.addTrainingSuccess(response.data.training))
  } catch (error) {
    dispatch(trainingActions.addTrainingError(error.message))
  }
}

const addResultsOperation = (date, pages) => async dispatch => {
  dispatch(trainingActions.addResultsRequest())
  try {
    const response = await axios.patch('/training', { date, pages })
    dispatch(trainingActions.addResultsSuccess(response.data.training))
  } catch (error) {
    dispatch(trainingActions.addResultsError(error.message))
  }
}

export { addTrainingOperation, addResultsOperation }
