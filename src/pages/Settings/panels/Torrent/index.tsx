import useStyles from './style'
import React, { ReactElement } from 'react'
import useSettingsModel from '../../model'
import SettingPanel from '../../../../components/SettingsPanel'

export interface TorrentSettingPanelPropsTypes {

}
const TorrentSettingPanel = ({ }: TorrentSettingPanelPropsTypes):ReactElement => {
  const classes = useStyles()
  const settingsModel = useSettingsModel()
  return (
    <div className={classes.root}>
      <SettingPanel
        fields={settingsModel.settingFields.torrent}
        onValueChange={(key: string, value: any) => settingsModel.updateValue('torrent', key, value)}
      />
    </div>
  )
}

export default TorrentSettingPanel
