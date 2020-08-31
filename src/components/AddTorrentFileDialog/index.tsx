import React, { ChangeEvent, useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import useStyles from './style';

export interface AddTorrentFileDialogPropsType {
  open?: boolean
  onOk: (torrentFile: File) => void
  onCancel: () => void
}

const AddTorrentFileDialog = ({ open = false, onOk, onCancel }: AddTorrentFileDialogPropsType) => {
  const [uploadFile, setUploadFile] = useState<File>();
  const onUploadChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files !== null) {
      setUploadFile(files[0]);
    }
  };
  const classes = useStyles()
  return (
    <Dialog open={open}>
      <DialogTitle id="form-dialog-title">添加文件</DialogTitle>
      <DialogContent>
        <input
          id="contained-button-file"
          multiple
          type="file"
          onChange={onUploadChange}
          className={classes.input}
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" color="primary" component="span">
            Upload
          </Button>
        </label>
        <div className={classes.fileName}>
          {uploadFile?.name}
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color="primary">
          取消
        </Button>
        <Button onClick={() => {
          if (uploadFile){
            onOk(uploadFile)
          }
        }} color="primary">
          添加
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddTorrentFileDialog;
