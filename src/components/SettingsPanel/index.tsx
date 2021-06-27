import React, { ReactElement } from 'react'
import { List, Paper } from '@material-ui/core'
import useStyles from './style'
import clsx from 'clsx'
import SwitchItem from './items/switch'
import { SettingField } from '../../pages/Settings/model'
import TextInputItem from './items/textinput'

export interface SettingPanelPropsType {
  className?: any
  fields?: SettingField[]
  onValueChange: (key: string, value: any) => void
}

const SettingPanel = ({ className, fields = [], onValueChange }: SettingPanelPropsType):ReactElement => {
  const classes = useStyles()
  const renderItem = (field: SettingField) => {
    if (field.type === 'switch') {
      return <SwitchItem title={field.title} checked={field.value} key={field.key} onChange={(value) => onValueChange(field.key, value)} />
    }
    if (field.type === 'text') {
      return (
        <TextInputItem
          title={field.title}
          onChange={(value) => onValueChange(field.key, value)}
          key={field.key}
          value={field.value}
        />
      )
    }
  }
  return (
    <Paper className={clsx(classes.root, className)}>
      <List>
        {
          fields.map(it => (renderItem(it)))
        }
      </List>
    </Paper>
  )
}

export default SettingPanel
