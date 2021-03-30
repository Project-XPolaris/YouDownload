import React, { ReactElement, useEffect, useState } from 'react'
import useStyles from './style'
import { Avatar, Fab, List, ListItem, ListItemAvatar, ListItemText, Tab, Tabs, TextField } from '@material-ui/core'
import { ArrowForward, Person } from '@material-ui/icons'
import { useHistory } from 'react-router-dom'
import { LoginHistory, loginHistoryManager } from '../../utils/login'
import { useUpdate } from 'ahooks'

export interface InitPagePropsType {

}

const InitPage = ({}: InitPagePropsType):ReactElement => {
  const classes = useStyles()
  const history = useHistory()
  const [apiUrl, setApiUrl] = useState<string | undefined>()
  const [tabIndex, setTabIndex] = useState<number>(0)
  const refresh = useUpdate()
  const loginHandler = async () => {
    if (!apiUrl) {
      return
    }
    const loginHistory : LoginHistory = {
      apiUrl,
      username: 'public',
      token: ''
    }
    loginHistoryManager.addHistory(loginHistory)
    localStorage.setItem('apiUrl', apiUrl)
    history.push('/home')
  }
  const check = () => {
    const apiUrl = localStorage.getItem('apiUrl')
    if (apiUrl != null) {
      history.push('/home')
    }
  }
  useEffect(() => {
    check()
    loginHistoryManager.refresh()
    refresh()
  }, [])
  const renderHistoryView = () => {
    const onItemClick = (loginHistory:LoginHistory) => {
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
                      <Person/>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={loginHistory.username} secondary={loginHistory.apiUrl}/>
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
          label="ApiUrl"
          variant="outlined"
          fullWidth
          className={classes.input}
          onChange={(e) => setApiUrl(e.target.value)}
          value={apiUrl}
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
        indicatorColor="primary"
        textColor="primary"
        onChange={(_, v) => setTabIndex(v)}
      >
        <Tab label="Recently login" />
        <Tab label="New login" />
      </Tabs>
      {
        tabIndex === 0 && renderHistoryView()
      }
      {
        tabIndex === 1 && renderNewLoginView()
      }
      <Fab color="primary" className={classes.fab} onClick={loginHandler}>
        <ArrowForward />
      </Fab>
    </div>
  )
}

export default InitPage
