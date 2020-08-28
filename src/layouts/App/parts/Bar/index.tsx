import React from 'react';
import useStyles from './style';
import { Toolbar, Typography, AppBar as ApplicationBar, IconButton } from '@material-ui/core';
import { Link } from '@material-ui/icons';
import useDialogsModel, { DialogKeys } from '../../../../models/dialogs';

export interface AppBarPropsType {

}

const AppBar = ({}: AppBarPropsType) => {
  const classes = useStyles();
  const dialogsModel = useDialogsModel();
  return (
    <ApplicationBar position="static" elevation={0} className={classes.root}>
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit" className={classes.title}>
          下载
        </Typography>
        <IconButton
          className={classes.actionIcon}
          onClick={() => dialogsModel.setDialog(DialogKeys.AddMargaretDialogKey, true)}
        >
          <Link />
        </IconButton>
      </Toolbar>
    </ApplicationBar>
  );
};

export default AppBar;
