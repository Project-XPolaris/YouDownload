import React from 'react';
import { IconButton, Paper } from '@material-ui/core';
import useStyles from './style';
import { Home } from '@material-ui/icons';

export interface AppNavigationPropsType {

}

const AppNavigation = ({}: AppNavigationPropsType) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <IconButton className={classes.navButton}>
        <Home />
      </IconButton>
    </div>
  );
};

export default AppNavigation;
