import React from 'react';
import AppRouter from '../Router';
import AppNavigation from './parts/Nav';
import useStyles from './style';
import AppBar from './parts/Bar';
import SubPanel from './parts/Sub';

export interface AppLayoutPropsType {

}

const AppLayout = ({}: AppLayoutPropsType) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppNavigation />
      <AppBar />
      <div className={classes.main}>
      
        <AppRouter />
      </div>
    </div>
  );
};

export default AppLayout;
