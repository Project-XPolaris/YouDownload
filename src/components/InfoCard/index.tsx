import React, { ReactElement } from 'react'
import { Paper } from '@material-ui/core'
import useStyles from './style'
import clsx from 'clsx'

export interface InfoCardPropsType {
  className?:any
  label:string
  value:string
}

const InfoCard = ({ className, label, value }: InfoCardPropsType):ReactElement => {
  const classes = useStyles()
  return (
    <Paper className={clsx(classes.root, className)}>
      <div className={classes.label}>
        {label}
      </div>
      <div className={classes.value}>
        {value}
      </div>
    </Paper>
  )
}

export default InfoCard
