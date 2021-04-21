import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import bookReducer from './bookReducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  // whitelist: ['accessToken', 'refreshToken', 'sid'],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, () => null),
  book: bookReducer,
});

export default rootReducer;
