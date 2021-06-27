import React, { Fragment, ReactElement } from 'react'
import { Divider, IconButton } from '@material-ui/core'
import useStyles from './style'
import useDialogsModel, { DialogKeys } from '../../../models/dialogs'
import { Add, Description, Link } from '@material-ui/icons'

const HomePageAction = ():ReactElement => {
  const classes = useStyles()
  const dialogsModel = useDialogsModel()

  return (
    <Fragment>
      <IconButton
        className={classes.actionIcon}
        onClick={() => dialogsModel.setDialog(DialogKeys.AddLinkDialogKey, true)}
      >
        <Add />
      </IconButton>
      <Divider orientation={'vertical'} />
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
