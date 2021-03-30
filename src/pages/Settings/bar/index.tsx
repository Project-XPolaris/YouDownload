import React, { Fragment, ReactElement } from 'react'
import { IconButton } from '@material-ui/core'
import useStyles from './style'
import { Save } from '@material-ui/icons'
import useSettingModel from '../model'

const SettingPageAction = ():ReactElement => {
  const classes = useStyles()
  const settingModel = useSettingModel()
  return (
    <Fragment>
      <IconButton
        className={classes.actionIcon}
        onClick={() => settingModel.applySetting()}
      >
        <Save />
      </IconButton>
    </Fragment>
  )
}
export default SettingPageAction
