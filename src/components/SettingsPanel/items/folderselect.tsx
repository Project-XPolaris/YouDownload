import React, { ReactElement } from 'react'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import useStyles from './style'
import clsx from 'clsx'
import { Description } from '@material-ui/icons'

export interface FolderSelectItemPropsType {
    className?: string

}

const FolderSelectItem = ({ className }: FolderSelectItemPropsType):ReactElement => {
  const classes = useStyles()
  return (
    <ListItem className={clsx(classes.root, className)}>
      <ListItemIcon>
        <Description />
      </ListItemIcon>
      <ListItemText primary="路径" />
    </ListItem>
  )
}

export default FolderSelectItem
