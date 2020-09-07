import useStyles from "./style"
import React from "react"
import useSettingsModel from "../../model"
import SettingPanel from "../../../../components/SettingsPanel"
export interface ProxySettingPanelPropsTypes {

}
const ProxySettingPanel = ({ }: ProxySettingPanelPropsTypes) => {
    const classes = useStyles()
    const settingsModel = useSettingsModel()
    return (
        <div className={classes.root}>
            <SettingPanel
                fields={settingsModel.settingFields.proxy}
                onValueChange={(key: string, value: any) => settingsModel.updateValue("proxy", key, value)}
            />
        </div>
    )
}

export default ProxySettingPanel
