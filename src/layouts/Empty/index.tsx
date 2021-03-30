import React from 'react'
import { AppBar as ApplicationBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import { Close, Fullscreen, Minimize, Refresh } from '@material-ui/icons'
import { app, remote } from '../../remote'
import useStyles from './style'

export interface EmptyLayoutPropsType {
  children: any
}

const EmptyLayout = ({ children }: EmptyLayoutPropsType): React.ReactElement => {
  const classes = useStyles()
  const onClose = () => {
    app.exit()
  }
  const onMin = () => {
    remote.BrowserWindow.getFocusedWindow().minimize()
  }
  const onMax = () => {
    const currentWindow = remote.BrowserWindow.getFocusedWindow()
    if (currentWindow.isMaximized()) {
      currentWindow.unmaximize()
    } else {
      currentWindow.maximize()
    }
  }
  const onReload = () => {
    remote.BrowserWindow.getFocusedWindow().reload()
  }
  return (
    <div>

      <ApplicationBar position='static' elevation={0} className={classes.header}>
        <Toolbar variant='dense'>
          <Typography variant='h6' color='inherit' className={classes.title}>
            YouDownload
          </Typography>

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
      {children}
    </div>
  )
}

export default EmptyLayout
