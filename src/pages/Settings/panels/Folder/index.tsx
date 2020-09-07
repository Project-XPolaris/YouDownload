import useStyles from "./style"
import React from "react"
import useSettingsModel from "../../model"
import SettingPanel from "../../../../components/SettingsPanel"
export interface FolderSettingPanelPropsTypes {

}
const FolderSettingPanel = ({ }: FolderSettingPanelPropsTypes) => {
    const classes = useStyles()
    const settingsModel = useSettingsModel()
    return (
        <div className={classes.root}>
            <SettingPanel
                fields={settingsModel.settingFields.folder}
                onValueChange={(key: string, value: any) => settingsModel.updateValue("folder", key, value)}
            />
        </div>
    )
}

export default FolderSettingPanel
