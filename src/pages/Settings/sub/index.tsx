import useStyles from './style'
import React, { ReactElement } from 'react'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { Apps } from '@material-ui/icons'
import useSettingsModel from '../model'

export interface SettingsSubPanelPropsTypes {

}
const settingNavs: Array<{ title: string, key: any, icon: any }> = [
  {
    key: 'app',
    title: 'App',
    icon: <Apps />
  }
]
const SettingsSubPanel = ({ }: SettingsSubPanelPropsTypes):ReactElement => {
  const classes = useStyles()
  const settingsModel = useSettingsModel()

  return (
    <div className={classes.root}>
      <List component="nav">
        {
          settingNavs.map(it => (
            <ListItem button selected={it.key === settingsModel.active} onClick={() => settingsModel.setActive(it.key)} key={it.key}>
              <ListItemIcon>
                {it.icon}
              </ListItemIcon>
              <ListItemText primary={it.title} />
            </ListItem>
          ))
        }
      </List>
    </div>
  )
}

export default SettingsSubPanel
