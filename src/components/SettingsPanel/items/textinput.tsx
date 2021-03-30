import React, { Fragment, ReactElement, useState } from 'react'
import { ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core'
import useStyles from './style'
import clsx from 'clsx'
import TextInputDialog from '../../TextInputDialog'

export interface TextInputItemPropsType {
    className?: any
    title: string
    value: string
    onChange: (value: string) => void
    key:any
}

const TextInputItem = ({ className, value, title, onChange, key }: TextInputItemPropsType):ReactElement => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  return (
    <Fragment>
      <TextInputDialog
        open={open}
        onOk={(value) => {
          setOpen(false)
          onChange(value)
        }}
        initValue={value}
        content="修改配置"
        title={title}
        onClose={() => setOpen(false)}
        label={title}
        key={`${key} - dialog`}
      />
      <ListItem key={`${key} - item`} className={clsx(classes.root, className)} button onClick={() => setOpen(true)}>

        <ListItemText primary={title} secondary={value} />
        <ListItemSecondaryAction>

        </ListItemSecondaryAction>
      </ListItem>
    </Fragment>
  )
}

export default TextInputItem
