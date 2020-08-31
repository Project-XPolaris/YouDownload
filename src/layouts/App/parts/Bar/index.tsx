import React from 'react';
import useStyles from './style';
import { AppBar as ApplicationBar, Divider, IconButton, Toolbar, Typography } from '@material-ui/core';
import { ArrowBack, ArrowLeft, Close, Description, Fullscreen, Link, Minimize, Refresh } from '@material-ui/icons';
import useDialogsModel, { DialogKeys } from '../../../../models/dialogs';
import { useHistory } from 'react-router-dom';
import { app, remote } from '../../../../remote';

export interface AppBarPropsType {

}

const AppBar = ({}: AppBarPropsType) => {
  const classes = useStyles();
  const dialogsModel = useDialogsModel();
  let history = useHistory();
  const onClose = () => {
    app.exit();
  };
  const onMin = () => {
    remote.BrowserWindow.getFocusedWindow().minimize();
  };
  const onMax = () => {
    const currentWindow = remote.BrowserWindow.getFocusedWindow();
    if (currentWindow.isMaximized()) {
      currentWindow.unmaximize();
    } else {
      currentWindow.maximize();
    }

  };
  const onReload = () => {
    remote.BrowserWindow.getFocusedWindow().reload();
  };
  const onBack = () => {
    history.goBack();
  };
  return (
    <ApplicationBar position="static" elevation={0} className={classes.root}>
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit" className={classes.title}>
          下载
        </Typography>
        <IconButton
          className={classes.actionIcon}
          onClick={() => dialogsModel.setDialog(DialogKeys.AddTorrentFileDialogKey, true)}
        >
         <Description />
        </IconButton>
        <IconButton
          className={classes.actionIcon}
          onClick={() => dialogsModel.setDialog(DialogKeys.AddMargaretDialogKey, true)}
        >
          <Link />
        </IconButton>
        <Divider orientation={'vertical'} className={classes.divider} />
        <IconButton
          size={'small'}
          className={classes.actionIcon}
          onClick={onBack}
        >
          <ArrowBack />
        </IconButton>
        <IconButton
          size={'small'}
          className={classes.actionIcon}
          onClick={onReload}
        >
          <Refresh />
        </IconButton>
        <IconButton
          size={'small'}
          className={classes.actionIcon}
          onClick={onMin}
        >
          <Minimize />
        </IconButton>
        <IconButton
          size={'small'}
          className={classes.actionIcon}
          onClick={onMax}
        >
          <Fullscreen />
        </IconButton>
        <IconButton
          size={'small'}
          className={classes.actionIcon}
          onClick={onClose}
        >
          <Close />
        </IconButton>
      </Toolbar>
    </ApplicationBar>
  );
};

export default AppBar;
