import React from 'react';
import AppRouter from '../Router';
import AppNavigation from './parts/Nav';
import useStyles from './style';
import AppBar from './parts/Bar';
import SubPanel from './parts/Sub';
import { BrowserRouter as Router } from 'react-router-dom';

export interface AppLayoutPropsType {

}

const AppLayout = ({ }: AppLayoutPropsType) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Router>
        <AppNavigation />
        <AppBar />
        <div className={classes.main}>
          <AppRouter />
        </div>
      </Router>
    </div>
  );
};

export default AppLayout;
