import useStyles from './style'
import React, { ReactElement } from 'react'

export interface SubPanelPropsTypes {
    children:any
}
const SubPanel = ({ children }: SubPanelPropsTypes):ReactElement => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {children}
    </div>
  )
}

export default SubPanel
