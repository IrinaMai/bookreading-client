import axios from 'axios';
import authActions from '../actions/authActions';
import notifActions from '../actions/notifActions';

axios.defaults.baseURL = 'http://localhost:5000/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const registerOperation = data => async dispatch => {
  dispatch(authActions.registerRequest());
  try {
    const response = await axios.post(`/auth/register`, data);
    token.set(response.data.token);
    const loginValues = { email: data.email, password: data.password };
    dispatch(authActions.registerSuccess(response.data));
    dispatch(loginOperation(loginValues));
  } catch (error) {
    dispatch(notifActions.showNotification());
    setTimeout(() => {
      dispatch(notifActions.hideNotification());
    }, 2000);
    dispatch(authActions.registerError(error.response.data.message));
  }
};

const loginOperation = data => async dispatch => {
  dispatch(authActions.loginRequest());
  try {
    const path = data.token ? `/auth/user` : `/auth/login`;
    const response = await axios.post(path, data);
    token.set(response.data.token);
    dispatch(authActions.loginSuccess(response.data));
  } catch (error) {
    dispatch(notifActions.showNotification());
    setTimeout(() => {
      dispatch(notifActions.hideNotification());
    }, 2000);
    dispatch(authActions.loginError(error.response.data.message));
  }
};

const logOutOperation = () => async dispatch => {
  dispatch(authActions.logOutRequest());
  try {
    await axios.post(`/auth/logout`);
    token.unset();
    dispatch(authActions.logOutSuccess());
  } catch (error) {
    dispatch(authActions.logOutError(error));
    dispatch(authActions.logOutSuccess());
  }
};

const authOperations = {
  registerOperation,
  loginOperation,
  logOutOperation,
};

export default authOperations;
