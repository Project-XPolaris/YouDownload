import React, { ReactElement } from 'react'
import {
  Paper,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
  IconButton, List, Menu, MenuItem
} from '@material-ui/core'
import useStyles from './style'
import clsx from 'clsx'
import { Description, ImportExport } from '@material-ui/icons'
import { filePriorityMapping } from '../../utils/filepriority'

export interface FileItemPropsType {
  className?: any
  filename: string
  fileSize: string
  priority: number
  onChangePriority:(level:number) => void
}

const FileItem = ({ className, fileSize, filename, priority, onChangePriority }: FileItemPropsType):ReactElement => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event:any) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (level:number) => {
    setAnchorEl(null)
    onChangePriority(level)
  }
  const menu = (
    <Menu
      id="priority-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      {Object.getOwnPropertyNames(filePriorityMapping).map((key: any) => (
        <MenuItem onClick={() => handleClose(Number(key))} key={key}>{filePriorityMapping[key]}</MenuItem>
      ))}
    </Menu>
  )
  return (
    <Paper>
      {menu}
      <List className={clsx(classes.root, className)}>
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.fileIcon}>
              <Description />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={filename} secondary={`${fileSize} - ${filePriorityMapping[priority]}`} />
          <ListItemSecondaryAction>
            <IconButton edge="end" onClick={handleClick}>
              <ImportExport />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </Paper>
  )
}

export default FileItem
