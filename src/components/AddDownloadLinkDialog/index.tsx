import React, { ChangeEvent, useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core';
import useStyles from './style';

export interface AddDownloadLinkDialogPropsType {
  open?:boolean
  onOk:(link:string) => void
  onCancel:() => void
}

const AddDownloadLinkDialog = ({open = false,onOk,onCancel}: AddDownloadLinkDialogPropsType) => {
  const [input,setInput] = useState<string | undefined>(undefined)
  const classes = useStyles()
  return (
    <Dialog open={open}>
      <DialogTitle id="form-dialog-title">添加链接</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="链接"
          type="text"
          fullWidth
          onChange={(e) => setInput(e.target.value)}
          className={classes.input}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color="primary">
          取消
        </Button>
        <Button onClick={() => {
          if (input){
            onOk(input);
          }
        }} color="primary">
          添加
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddDownloadLinkDialog;
