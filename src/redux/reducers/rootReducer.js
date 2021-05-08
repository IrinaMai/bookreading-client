import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import bookReducer from './bookReducer'

import authReducer from './authReducer'
import errorReducer from './errorReducer'
import loaderReducer from './loaderReducer'
import trainingReducer from './trainingReducer'
import modalReducer from './modalReducer'
import modalContentReducer from './modalContentReducer'
import themeReducer from './themeReducer'
import notificationReducer from './notifReducer'

const authPersistConfig = {
  key: 'auth',
  storage,
  // whitelist: [],
  whitelist: ['token', 'refreshToken'],
  // whitelist: ['accessToken', 'refreshToken', 'sid'],
}

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  training: trainingReducer,
  book: bookReducer,
  loading: loaderReducer,
  error: errorReducer,
  modal: modalReducer,
  modalContent: modalContentReducer,
  theme: themeReducer,
  notification: notificationReducer
})
export default rootReducer
