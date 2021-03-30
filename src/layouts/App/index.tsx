import React, { ReactElement } from 'react'
import AppNavigation from './parts/Nav'
import useStyles from './style'
import AppBar from './parts/Bar'

export interface AppLayoutPropsType {
  children:any
}

const AppLayout = ({ children }: AppLayoutPropsType):ReactElement => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppNavigation />
      <AppBar />
      <div className={classes.main}>
        {children}
      </div>
    </div>
  )
}

export default AppLayout
