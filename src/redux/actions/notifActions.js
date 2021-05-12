import { createAction } from '@reduxjs/toolkit';

const showNotification = createAction('notification/show');
const hideNotification = createAction('notification/hide');

const notifActions = { showNotification, hideNotification};

export default notifActions;