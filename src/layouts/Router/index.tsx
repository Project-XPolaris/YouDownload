import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../../pages/Home';
import SubPanel from '../App/parts/Sub';
import HomeSubPanel from '../../pages/Home/sub';

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
            <SubPanel>
              <HomeSubPanel />
            </SubPanel>
            <HomePage/>
          </Route>
        </Switch>
      </Router>
  );
};

export default AppRouter;
