import { Fragment } from "react"
import { IconButton } from "@material-ui/core"
import useStyles from "./style"
import { Description, Link, Save } from "@material-ui/icons"
import useSettingModel from '../model'
import React from "react"
const SettingPageAction = () => {
    const classes = useStyles()
    const settingModel = useSettingModel()
    return (
        <Fragment>
            <IconButton
                className={classes.actionIcon}
                onClick={() => settingModel.applySetting()}
            >
                <Save />
            </IconButton>
        </Fragment>
    )
}
export default SettingPageAction