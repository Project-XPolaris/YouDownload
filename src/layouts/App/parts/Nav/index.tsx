import React from 'react';
import { IconButton, Paper } from '@material-ui/core';
import useStyles from './style';
import {
  Check,
  CheckCircle,
  CheckCircleOutline,
  GetApp,
  GetAppOutlined,
  Home, ListAlt,
  Pause,
  PauseOutlined, Power,
} from '@material-ui/icons';
import useTorrentModel from '../../../../models/torrents';
import useLayoutModel from '../../../../models/layout';
import logo from "../../../../assets/icon.png"

export interface AppNavigationPropsType {

}

interface NavItem {
  key: string,
  icon: any
}

const AppNavigation = ({}: AppNavigationPropsType) => {
  const classes = useStyles();
  const torrentModel = useTorrentModel();
  const layoutModel = useLayoutModel();
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
  const onTorrentStatusNavChange = (key:string) => {
    layoutModel.setActiveNav(key)
    torrentModel.setStatusFilter(key)
  }
  return (
    <div className={classes.root}>
      <img src={logo} className={classes.logo}/>
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
    </div>
  );
};

export default AppNavigation;
