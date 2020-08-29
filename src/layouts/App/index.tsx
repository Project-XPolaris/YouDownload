import React from 'react';
import AppRouter from '../Router';
import AppNavigation from './parts/Nav';
import useStyles from './style';
import AppBar from './parts/Bar';

export interface AppLayoutPropsType {

}

const AppLayout = ({}: AppLayoutPropsType) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppNavigation />
      <div className={classes.main}>
        <AppBar />
        <AppRouter />
      </div>
    </div>
  );
};

export default AppLayout;
