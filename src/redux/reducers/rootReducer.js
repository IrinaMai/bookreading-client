import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import loaderReducer from './loaderReducer';
import trainingReducer from './trainingReducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: [],
  // whitelist: ['token'],
  // whitelist: ['accessToken', 'refreshToken', 'sid'],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  training: trainingReducer,
  loading: loaderReducer,
  error: errorReducer,
});

export default rootReducer;
