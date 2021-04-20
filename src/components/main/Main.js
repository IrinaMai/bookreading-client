import React from 'react';
import { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import DefaultPage from '../../pages/defaultPage/DefaultPage';
import mainRoutes from '../../routes/mainRoutes';
import LoaderSpinner from '../loader/Loader';
import PrivateRoute from '../privateRoute/PrivateRoute';
import PublicRoute from '../publicRoute/PublicRoute';

const Main = () => {
  const isAuth = true;

  return (
    <>
      <Suspense fallback={<LoaderSpinner />}>
        <Switch>
          {mainRoutes.map(route => {
            if (route.isPrivate) {
              return <PrivateRoute {...route} key={route.path} isAuth={isAuth} />;
            } else {
              return <PublicRoute {...route} key={route.path} isAuth={isAuth} />;
            }
          })}
          <Route
            exact
            path="/"
            render={() => {
              return isAuth ? <Redirect to="/library" /> : <Redirect to="/login" />;
            }}
          />
          <Route component={DefaultPage} />
        </Switch>
      </Suspense>
    </>
  );
};

export default Main;
