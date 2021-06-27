import React, { ReactElement } from 'react'
import useStyles from './style'
import { AppBar as ApplicationBar, Divider, IconButton, Toolbar, Typography } from '@material-ui/core'
import { CheckBoxOutlineBlank, Close, Remove } from '@material-ui/icons'
import { useHistory } from 'react-router-dom'
import { app, remote } from '../../../../remote'
import HomePageAction from '../../../../pages/Home/bar'
import useLayoutModel from '../../../../models/layout'
import SettingPageAction from '../../../../pages/Settings/bar'

export interface AppBarPropsType {

}

const AppBar = ({ }: AppBarPropsType):ReactElement => {
  const classes = useStyles()
  const history = useHistory()
  const layoutModel = useLayoutModel()
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
  const renderActions = () => {
    console.log(history.location.pathname)
    if (layoutModel.activeNav !== 'settings') {
      return (<HomePageAction />)
    } else {
      return (<SettingPageAction />)
    }
  }
  return (
    <ApplicationBar position="static" elevation={0} className={classes.root}>
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit" className={classes.title}>
          下载
        </Typography>

        {renderActions()}

        <Divider orientation={'vertical'} className={classes.divider} />
        <IconButton
          size={'small'}
          className={classes.actionIcon}
          onClick={onMin}
        >
          <Remove />
        </IconButton>
        <IconButton
          size={'small'}
          className={classes.actionIcon}
          onClick={onMax}
        >
          <CheckBoxOutlineBlank />
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
  )
}

export default AppBar
