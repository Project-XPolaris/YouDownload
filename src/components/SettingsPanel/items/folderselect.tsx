import React from 'react';
import { Paper, ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction } from '@material-ui/core';
import useStyles from './style';
import clsx from 'clsx';
import { Description, Folder } from '@material-ui/icons';

export interface FolderSelectItemPropsType {
    className?: any

}

const FolderSelectItem = ({ className }: FolderSelectItemPropsType) => {
    const classes = useStyles()
    return (
        <ListItem className={clsx(classes.root, className)}>
            <ListItemIcon>
                <Description />
            </ListItemIcon>
            <ListItemText primary="路径" />
        </ListItem>
    );
};

export default FolderSelectItem;