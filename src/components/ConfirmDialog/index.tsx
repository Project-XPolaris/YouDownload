import React, { ReactElement } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core'
import useStyles from './style'

export interface ConfirmDialogPropsType {
    title: string
    content: string
    open?: boolean
    onOk: () => void
    onCancel: () => void
}

const ConfirmDialog = ({ open = false, onOk, onCancel, title, content }: ConfirmDialogPropsType):ReactElement => {
  const classes = useStyles()
  return (
    <Dialog open={open}>
      <DialogTitle id="form-dialog-title">{title}</DialogTitle>
      <DialogContent className={classes.content}>
        {content}
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color="primary">取消</Button>
        <Button onClick={onOk} color="primary">确认</Button>
      </DialogActions>
    </Dialog>
  )
}

export default ConfirmDialog
