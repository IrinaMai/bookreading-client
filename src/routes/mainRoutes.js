import { lazy } from 'react';

const mainRoutes = [
  {
    path: '/login',
    name: 'Вхід',
    exact: false,
    component: lazy(() => import('../pages/loginPage/LoginPage' /* webpackChunkName: "LoginPage"*/)),
    isPrivate: false,
  },
  {
    path: '/register',
    name: 'Реєстрація',
    exact: false,
    component: lazy(() => import('../pages/registerPage/RegisterPage' /* webpackChunkName: "RegistrationPage"*/)),
    isPrivate: false,
  },
  {
    path: '/library',
    name: 'Бібліотека',
    exact: false,
    component: lazy(() => import('../pages/libraryPage/LibraryPage' /* webpackChunkName: "LibraryPage"*/)),
    isPrivate: true,
  },
  {
    path: '/training',
    name: 'Тренування',
    exact: false,
    component: lazy(() => import('../pages/trainingPage/TrainingPage' /* webpackChunkName: "TrainingPage"*/)),
    isPrivate: true,
  },
];

export default mainRoutes;
