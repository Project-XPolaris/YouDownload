import useStyles from './style'
import React, { ReactElement, useEffect } from 'react'
import useSettingsModel from './model'

const SettingsPage = ():ReactElement => {
  const classes = useStyles()
  const settingsModel = useSettingsModel()
  useEffect(() => {
    settingsModel.refreshSetting()
  }, [])
  return (
    <div className={classes.root}>

    </div>
  )
}

export default SettingsPage
