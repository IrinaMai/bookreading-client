import {
  postBookRequest,
  postBookSuccess,
  postBookError,
  patchBookRequest,
  patchBookSuccess,
  patchBookError,
} from '../actions/bookAction'
import notifActions from '../actions/notifActions'
import axios from 'axios'

const addBookToDb = data => async dispatch => {
  dispatch(postBookRequest())
  try {
    const result = await axios.post(`/library`, data)
    dispatch(postBookSuccess(result.data))
  } catch (error) {
  
    dispatch(notifActions.showNotification());
    setTimeout(() => {
      dispatch(notifActions.hideNotification());
    }, 2000);
    dispatch(postBookError(error.response.data.message))
  }

}

const patchBookAtDB = (bookId, data) => async dispatch => {
  dispatch(patchBookRequest())
  try {
    const result = await axios.patch(`/library/${bookId}`, { ...data })
    dispatch(patchBookSuccess(result.data.data))
  } catch (error) {
    dispatch(notifActions.showNotification());
    setTimeout(() => {
      dispatch(notifActions.hideNotification());
    }, 2000);
    dispatch(patchBookError(error.response.data.message))

  }
}

export { addBookToDb, patchBookAtDB }
