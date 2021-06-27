import React, { ReactElement, useEffect, useState } from 'react'
import useStyles from './style'
import { Avatar, Fab, List, ListItem, ListItemAvatar, ListItemText, Tab, Tabs, TextField } from '@material-ui/core'
import { ArrowForward, Person } from '@material-ui/icons'
import { useHistory } from 'react-router-dom'
import { LoginHistory, loginHistoryManager } from '../../utils/login'
import { useUpdate } from 'ahooks'
import { ApplicationConfig } from '../../config'
import { getUserAuth } from '../../api/auth'

const InitPage = (): ReactElement => {
  const classes = useStyles()
  const history = useHistory()
  const [inputAPIUrl, setApiUrl] = useState<string | undefined>()
  const [inputUsername, setUsername] = useState<string>('')
  const [inputPassword, setPassword] = useState<string>('')
  const [tabIndex, setTabIndex] = useState<number>(0)
  const refresh = useUpdate()
  const loginHandler = async () => {
    if (!inputAPIUrl) {
      return
    }
    localStorage.setItem(ApplicationConfig.storeKey.apiUrl, inputAPIUrl)
    const response = await getUserAuth(inputUsername, inputPassword)
    if (response.token) {
      const loginHistory: LoginHistory = {
        apiUrl: inputAPIUrl,
        username: inputUsername,
        token: response.token,
      }
      loginHistoryManager.addHistory(loginHistory)
      localStorage.setItem(ApplicationConfig.storeKey.token, response.token)
      localStorage.setItem(ApplicationConfig.storeKey.username, inputUsername)
    } else {
      const loginHistory: LoginHistory = {
        apiUrl: inputAPIUrl,
        username: 'public',
        token: '',
      }
      localStorage.removeItem(ApplicationConfig.storeKey.token)
      localStorage.setItem(ApplicationConfig.storeKey.username, 'public')
      loginHistoryManager.addHistory(loginHistory)
    }
    if (response.needInit) {
      history.replace('/setup')
    }
  }
  const check = () => {
    // const apiUrl = localStorage.getItem('apiUrl')
    // if (apiUrl != null) {
    //   history.push('/home')
    // }
  }
  useEffect(() => {
    check()
    loginHistoryManager.refresh()
    refresh()
  }, [])
  const renderHistoryView = () => {
    const onItemClick = (loginHistory: LoginHistory) => {
      localStorage.setItem('apiUrl', loginHistory.apiUrl)
      history.push('/home')
    }
    return (
      <div>
        <List>
          {
            loginHistoryManager.list.map((loginHistory, idx) => {
              return (
                <ListItem key={idx} button onClick={() => onItemClick(loginHistory)}>
                  <ListItemAvatar>
                    <Avatar>
                      <Person />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={loginHistory.username} secondary={loginHistory.apiUrl} />
                </ListItem>
              )
            })
          }
        </List>
      </div>
    )
  }
  const renderNewLoginView = () => {
    return (
      <>
        <TextField
          label='ApiUrl'
          variant='outlined'
          fullWidth
          className={classes.input}
          onChange={(e) => setApiUrl(e.target.value)}
          value={inputAPIUrl}
        />
        <TextField
          label='Username'
          variant='outlined'
          fullWidth
          className={classes.input}
          onChange={(e) => setUsername(e.target.value)}
          value={inputUsername}
        />
        <TextField
          label='Password'
          variant='outlined'
          fullWidth
          type='password'
          className={classes.input}
          onChange={(e) => setPassword(e.target.value)}
          value={inputPassword}
        />
      </>
    )
  }
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        Login
      </div>
      <Tabs
        className={classes.tabs}
        value={tabIndex}
        indicatorColor='primary'
        textColor='primary'
        onChange={(_, v) => setTabIndex(v)}
      >
        <Tab label='Recently login' />
        <Tab label='New login' />
      </Tabs>
      {
        tabIndex === 0 && renderHistoryView()
      }
      {
        tabIndex === 1 && renderNewLoginView()
      }
      <Fab color='primary' className={classes.fab} onClick={loginHandler}>
        <ArrowForward />
      </Fab>
    </div>
  )
}

export default InitPage
