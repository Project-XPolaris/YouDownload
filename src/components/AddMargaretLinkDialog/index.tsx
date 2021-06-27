import React, { ReactElement, useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core'
import useStyles from './style'

export interface AddMargaretLinkDialogPropsType {
  open?:boolean
  onOk:(link:string) => void
  onCancel:() => void
}

const AddMargaretLinkDialog = ({ open = false, onOk, onCancel }: AddMargaretLinkDialogPropsType):ReactElement => {
  const [input, setInput] = useState<string | undefined>(undefined)
  const classes = useStyles()
  return (
    <Dialog open={open}>
      <DialogTitle id="form-dialog-title">添加磁力链接任务</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="链接"
          placeholder='输入磁力链接'
          type="text"
          fullWidth
          variant='outlined'
          onChange={(e) => setInput(e.target.value)}
          className={classes.input}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color="primary">
          取消
        </Button>
        <Button onClick={() => {
          if (input) {
            onOk(input)
          }
        }} color="primary">
          添加
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddMargaretLinkDialog
