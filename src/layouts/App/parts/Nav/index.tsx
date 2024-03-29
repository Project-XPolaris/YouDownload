import React, { ReactElement, useEffect } from 'react'
import { Divider, IconButton } from '@material-ui/core'
import useStyles from './style'
import { CheckCircle, GetApp, LinkOff, ListAlt, Pause, Power, Settings } from '@material-ui/icons'
import useLayoutModel from '../../../../models/layout'
import logo from '../../../../assets/icon.png'
import { useHistory } from 'react-router-dom'
import useTaskModel from '../../../../models/task'
import { useInterval } from 'ahooks'
import { DefaultWebsocketAPI } from '../../../../api/notification/instance'

export interface AppNavigationPropsType {

}

interface NavItem {
  key: string,
  icon: any
}

const AppNavigation = ({ }: AppNavigationPropsType):ReactElement => {
  const classes = useStyles()
  const taskModel = useTaskModel()
  const layoutModel = useLayoutModel()
  const history = useHistory()
  useEffect(() => {
    taskModel.refreshTask()
    DefaultWebsocketAPI.connect()
    DefaultWebsocketAPI.addHandler({
      id: 'main',
      onMessage: (event) => {
        console.log('on message')
        console.log(event)
        if (event.event === 'TaskStatus') {
          taskModel.setTasks(event.data)
        }
      }
    })
  }, [])



  const torrentNavs: NavItem[] = [
    {
      key: 'Engine',
      icon: <Power />
    },
    {
      key: 'Running',
      icon: <GetApp />
    },
    {
      key: 'Stopped',
      icon: <Pause />
    },
    {
      key: 'Completed',
      icon: <CheckCircle />
    },
    {
      key: 'All',
      icon: <ListAlt />
    }

  ]
  const onTorrentStatusNavChange = (key: string) => {
    if (history.location.pathname !== '/home') {
      history.push('/home')
    }
    layoutModel.setActiveNav(key)
    taskModel.setStatusFilter(key)
  }
  const onUnlink = () => {
    localStorage.removeItem('apiUrl')
    layoutModel.setActiveNav('Engine')
    history.replace('/init')
  }
  return (
    <div className={classes.root}>
      <img src={logo} className={classes.logo} alt='logo' />
      {
        torrentNavs.map(it => (
          <IconButton
            className={layoutModel.activeNav === it.key ? classes.navButtonActive : classes.navButton}
            key={it.key}
            onClick={() => onTorrentStatusNavChange(it.key)}
          >
            {it.icon}
          </IconButton>
        ))
      }
      <Divider className={classes.divider}/>
      <IconButton
        className={layoutModel.activeNav === 'settings' ? classes.navButtonActive : classes.navButton}
        onClick={() => {
          history.push('/settings')
          layoutModel.setActiveNav('settings')
        }}
      >
        <Settings />
      </IconButton>
      <IconButton
        className={classes.navButton}
        onClick={onUnlink}
      >
        <LinkOff />
      </IconButton>
    </div>
  )
}

export default AppNavigation
