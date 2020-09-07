import useStyles from "./style"
import React, { useEffect } from "react"
import useSettingsModel from "./model"
import SettingPanel from "../../components/SettingsPanel"
import ProxySettingPanel from "./panels/Proxy"
import ConnectionSettingPanel from "./panels/Connection"
import FolderSettingPanel from "./panels/Folder"
import TrackerSettingPanel from "./panels/Tracker"
export interface SettingsPagePropsTypes {

}
const SettingsPage = ({ }: SettingsPagePropsTypes) => {
    const classes = useStyles()
    const settingsModel = useSettingsModel()
    useEffect(() => {
        settingsModel.refreshSetting()
    }, [])
    const getPanel = () => {
        if (settingsModel.active === "proxy") {
            return <ProxySettingPanel />

        }
        if (settingsModel.active === "connection") {
            return <ConnectionSettingPanel />
        }
        if (settingsModel.active === "folder") {
            return <FolderSettingPanel />
        }
        if (settingsModel.active === "tracker") {
            return <TrackerSettingPanel />
        }
    }
    return (
        <div className={classes.root}>
            {getPanel()}
        </div>
    )
}

export default SettingsPage
