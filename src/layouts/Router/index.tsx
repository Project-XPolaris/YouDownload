import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../../pages/Home';

export interface AppRouterPropsType {

}

const AppRouter = ({}: AppRouterPropsType) => {
  return (
      <Router>
        <Switch>
          <Route path="/about">
            about
          </Route>
          <Route path="/users">
            users
          </Route>
          <Route path="/">
            <HomePage/>
          </Route>
        </Switch>
      </Router>
  );
};

export default AppRouter;
