import useStyles from "./style"
import React from "react"
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import { Public, SettingsInputComponent, Folder, TrackChanges } from "@material-ui/icons"
import useSettingsModel from "../model"

export interface SettingsSubPanelPropsTypes {

}
const settingNavs: Array<{ title: string, key: any, icon: any }> = [
    {
        key: "proxy",
        title: "代理",
        icon: <Public />
    },
    {
        key: "connection",
        title: "连接",
        icon: <SettingsInputComponent />
    },
    {
        key: "folder",
        title: "路径",
        icon: <Folder />
    },
    {
        key: "tracker",
        title: "Tracker",
        icon: <TrackChanges />
    },

]
const SettingsSubPanel = ({ }: SettingsSubPanelPropsTypes) => {
    const classes = useStyles()
    const settingsModel = useSettingsModel()

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                {
                    settingNavs.map(it => (
                        <ListItem button selected={it.key === settingsModel.active} onClick={() => settingsModel.setActive(it.key)}>
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
