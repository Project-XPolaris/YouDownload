import React from 'react';
import { Paper, ListItem, ListItemText } from '@material-ui/core';
import useStyles from './style';
import clsx from 'clsx';

export interface FileItemPropsType {
  className?:any
  filename:string
  fileSize:string
}

const FileItem = ({className,fileSize,filename}: FileItemPropsType) => {
  const classes = useStyles()
  return (
    <Paper className={clsx(classes.root,className)}>
     <ListItem>
         <ListItemText primary={filename} secondary={fileSize}/>
     </ListItem>
    </Paper>
  );
};

export default FileItem;
