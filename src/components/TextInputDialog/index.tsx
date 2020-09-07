import React, { useState } from 'react';
import { Paper, ListItem, ListItemIcon, ListItemText, Switch, ListItemSecondaryAction, Dialog, DialogContent, DialogTitle, DialogContentText, TextField, DialogActions, Button } from '@material-ui/core';
import useStyles from './style';
import clsx from 'clsx';
import { Description } from '@material-ui/icons';

export interface TextInputDialogPropsType {
    title: string
    open: boolean
    onClose: () => void
    initValue?: string
    content?: string
    onOk: (value: string) => void
    label: string
}

const TextInputDialog = ({ title, open, initValue = "", content = "", onClose, onOk, label }: TextInputDialogPropsType) => {
    const classes = useStyles()
    const [inputValue, setInputValue] = useState<string | undefined>(undefined)
    const onDialogOk = () => {
        onOk(inputValue ?? initValue)
    }
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle id="form-dialog-title">{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {content}
                </DialogContentText>
                <TextField
                    autoFocus
                    label={label}
                    type="text"
                    fullWidth
                    onChange={e => setInputValue(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    取消
          </Button>
                <Button onClick={onDialogOk} color="primary">
                    确认
          </Button>
            </DialogActions>
        </Dialog>
    );
};

export default TextInputDialog;