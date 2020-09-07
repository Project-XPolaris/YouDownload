import useStyles from "./style"
import React from "react"
import useSettingsModel from "../../model"
import SettingPanel from "../../../../components/SettingsPanel"
export interface ConnectionSettingPanelPropsTypes {

}
const ConnectionSettingPanel = ({ }: ConnectionSettingPanelPropsTypes) => {
    const classes = useStyles()
    const settingsModel = useSettingsModel()
    return (
        <div className={classes.root}>
            <SettingPanel
                fields={settingsModel.settingFields.connection}
                onValueChange={(key: string, value: any) => settingsModel.updateValue("connection", key, value)}
            />
        </div>
    )
}

export default ConnectionSettingPanel
