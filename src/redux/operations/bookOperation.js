import {
  postBookRequest,
  postBookSuccess,
  postBookError,
  patchBookRequest,
  patchBookSuccess,
  patchBookError,
} from '../actions/bookAction'
import axios from 'axios'

const addBookToDb = data => async dispatch => {
  dispatch(postBookRequest())
  try {
    const result = await axios.post(`/library`, data)
    dispatch(postBookSuccess(result.data))
  } catch (error) {
    dispatch(postBookError(error))
  }
}

const patchBookAtDB = (bookId, data) => async dispatch => {
  dispatch(patchBookRequest())
  try {
    const result = await axios.patch(`/library/${bookId}`, { ...data })
    dispatch(patchBookSuccess(result.data.data))
  } catch (error) {
    dispatch(patchBookError())
  }
}

export { addBookToDb, patchBookAtDB }
