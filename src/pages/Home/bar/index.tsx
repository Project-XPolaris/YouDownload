import { Fragment } from "react"
import { Divider, IconButton } from '@material-ui/core';
import useStyles from "./style"
import useDialogsModel, { DialogKeys } from '../../../models/dialogs'
import { Description, Link,Add } from "@material-ui/icons"
import React from "react"
const HomePageAction = () => {
    const classes = useStyles()
    const dialogsModel = useDialogsModel();

    return (
        <Fragment>
          <IconButton
            className={classes.actionIcon}
            onClick={() => dialogsModel.setDialog(DialogKeys.AddLinkDialogKey, true)}
          >
            <Add />
          </IconButton>
          <Divider orientation={"vertical"} />
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
