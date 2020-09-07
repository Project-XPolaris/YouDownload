import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../../pages/Home';
import SubPanel from '../App/parts/Sub';
import HomeSubPanel from '../../pages/Home/sub';
import HomePageWrap from '../../pages/Home/wrap';
import { Settings } from '@material-ui/icons';
import SettingsSubPanel from '../../pages/Settings/Sub';
import SettingsPage from '../../pages/Settings';

export interface AppRouterPropsType {

}

const AppRouter = ({ }: AppRouterPropsType) => {
  return (
    <Switch>
      <Route path="/about">
        about
      </Route>
      <Route path="/users">
        users
      </Route>
      <Route path="/settings">
        <SubPanel>
          <SettingsSubPanel />
        </SubPanel>
        <SettingsPage />
      </Route>
      <Route path="/">
        <HomePageWrap />
      </Route>

    </Switch>

  );
};

export default AppRouter;
