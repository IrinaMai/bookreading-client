import axios from 'axios'
import notifActions from '../actions/notifActions'
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
    dispatch(notifActions.showNotification());
    setTimeout(() => {
      dispatch(notifActions.hideNotification());
    }, 2000);
    dispatch(trainingActions.addTrainingError(error.message))
  }
}

const addResultsOperation = (date, pages) => async dispatch => {
  dispatch(trainingActions.addResultsRequest())
  try {
    const response = await axios.patch('/training', { date, pages })
    dispatch(trainingActions.addResultsSuccess(response.data.training))
  } catch (error) {
    dispatch(notifActions.showNotification());
    setTimeout(() => {
      dispatch(notifActions.hideNotification());
    }, 2000);
    dispatch(trainingActions.addResultsError(error.message))
  }
}

const getTrainingOperation = () => async dispatch => {
  dispatch(trainingActions.getTrainingRequest())
  try {
    const response = await axios.get('/training')
    dispatch(trainingActions.getTrainingSuccess(response.data.training))
  } catch (error) {
    dispatch(notifActions.showNotification());
    setTimeout(() => {
      dispatch(notifActions.hideNotification());
    }, 2000);
    dispatch(trainingActions.getTrainingError(error.message))
  }
}

export { addTrainingOperation, addResultsOperation, getTrainingOperation }
