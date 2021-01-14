import useStyles from "./style"
import React, { useEffect } from "react"
import useSettingsModel from "./model"
import SettingPanel from "../../components/SettingsPanel"
import ProxySettingPanel from "./panels/Proxy"
import ConnectionSettingPanel from "./panels/Torrent"
import FolderSettingPanel from "./panels/Folder"
import TrackerSettingPanel from "./panels/Tracker"
import TorrentSettingPanel from './panels/Torrent';
export interface SettingsPagePropsTypes {

}
const SettingsPage = ({ }: SettingsPagePropsTypes) => {
    const classes = useStyles()
    const settingsModel = useSettingsModel()
    useEffect(() => {
        settingsModel.refreshSetting()
    }, [])
    const getPanel = () => {
        if (settingsModel.active === "torrent") {
            return <TorrentSettingPanel />
        }
    }
    return (
        <div className={classes.root}>
            {getPanel()}
        </div>
    )
}

export default SettingsPage
