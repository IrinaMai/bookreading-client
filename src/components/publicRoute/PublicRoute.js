import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ path, exact, component, isAuth }) => {
  return isAuth ? <Redirect to="/library" /> : <Route path={path} exact={exact} component={component} key={path} />;
};

export default PublicRoute;
