import { createReducer } from '@reduxjs/toolkit';
import notifActions from '../actions/notifActions';


const notificationReducer = createReducer(false, {
  [notifActions.showNotification]: () => true,
  [notifActions.hideNotification]: () => false,
});

export default notificationReducer;