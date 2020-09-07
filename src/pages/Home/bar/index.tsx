import { Fragment } from "react"
import { IconButton } from "@material-ui/core"
import useStyles from "./style"
import useDialogsModel, { DialogKeys } from '../../../models/dialogs'
import { Description, Link } from "@material-ui/icons"
import React from "react"
const HomePageAction = () => {
    const classes = useStyles()
    const dialogsModel = useDialogsModel();

    return (
        <Fragment>
            <IconButton
                className={classes.actionIcon}
                onClick={() => dialogsModel.setDialog(DialogKeys.AddTorrentFileDialogKey, true)}
            >
                <Description />
            </IconButton>
            <IconButton
                className={classes.actionIcon}
                onClick={() => dialogsModel.setDialog(DialogKeys.AddMargaretDialogKey, true)}
            >
                <Link />
            </IconButton>
        </Fragment>
    )
}
export default HomePageAction