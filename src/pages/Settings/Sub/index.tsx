import useStyles from "./style"
import React from "react"
import { List, ListItem, ListItemIcon, ListItemText, Chip } from "@material-ui/core"
import { Public, SettingsInputComponent, Folder, TrackChanges,SwapVert,CloudDownload } from "@material-ui/icons"
import useSettingsModel from "../model"

export interface SettingsSubPanelPropsTypes {

}
const settingNavs: Array<{ title: string, key: any, icon: any }> = [
    {
        key: "torrent",
        title: "Torrent",
        icon: <CloudDownload />
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
