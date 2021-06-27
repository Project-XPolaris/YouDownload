import useStyles from './style'
import React, { ReactElement } from 'react'
import useSettingsModel from '../../model'
import SettingPanel from '../../../../components/SettingsPanel'

export interface TrackerSettingPanelPropsTypes {

}
const TrackerSettingPanel = ({ }: TrackerSettingPanelPropsTypes):ReactElement => {
  const classes = useStyles()
  const settingsModel = useSettingsModel()
  console.log(settingsModel.settingFields.tracker)
  return (
    <div className={classes.root}>
      <SettingPanel
        fields={settingsModel.settingFields.tracker}
        onValueChange={(key: string, value: any) => settingsModel.updateValue('tracker', key, value)}
      />
    </div>
  )
}

export default TrackerSettingPanel
