import React from 'react';
import { IconButton, Paper, Divider } from '@material-ui/core';
import useStyles from './style';
import {
  Check,
  CheckCircle,
  CheckCircleOutline,
  GetApp,
  GetAppOutlined,
  Home, ListAlt,
  Pause,
  PauseOutlined, Power, Settings,
} from '@material-ui/icons';
import useTorrentModel from '../../../../models/torrents';
import useLayoutModel from '../../../../models/layout';
import logo from "../../../../assets/icon.png"
import { useHistory } from "react-router-dom";

export interface AppNavigationPropsType {

}

interface NavItem {
  key: string,
  icon: any
}

const AppNavigation = ({ }: AppNavigationPropsType) => {
  const classes = useStyles();
  const torrentModel = useTorrentModel();
  const layoutModel = useLayoutModel();
  const history = useHistory()
  const torrentNavs: NavItem[] = [
    {
      key: 'Engine',
      icon: <Power />,
    },
    {
      key: 'Running',
      icon: <GetApp />,
    },
    {
      key: 'Stopped',
      icon: <Pause />,
    },
    {
      key: 'Completed',
      icon: <CheckCircle />,
    },
    {
      key: 'All',
      icon: <ListAlt />,
    },

  ];
  const onTorrentStatusNavChange = (key: string) => {
    if (history.location.pathname !== "/"){
      history.push("/")
    }
    layoutModel.setActiveNav(key)
    torrentModel.setStatusFilter(key)
  }
  return (
    <div className={classes.root}>
      <img src={logo} className={classes.logo} />
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
      className={layoutModel.activeNav === "settings" ? classes.navButtonActive : classes.navButton} 
      onClick={() => {      
        history.push("/settings")
        layoutModel.setActiveNav("settings")
      }}
      >
        <Settings />
      </IconButton>
    </div>
  );
};

export default AppNavigation;
