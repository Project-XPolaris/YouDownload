import React, { useEffect } from 'react';
import {
  Avatar,
  IconButton, LinearProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core';
import { BeachAccess, Link, Pause, PlayArrow, Work } from '@material-ui/icons';
import useStyles from './style';
import useTorrentModel from '../../models/torrents';
import { useRequest } from 'ahooks';
import { addMargaretLink, startDownload, stopDownload } from '../../api/torrent';
import AddMargaretLinkDialog from '../../components/AddMargaretLinkDialog';
import useDialogsModel, { DialogKeys } from '../../models/dialogs';
import DownloadItem from '../../components/DownloadItem';

export interface HomePagePropsType {

}

const HomePage = ({}: HomePagePropsType) => {
  const classes = useStyles();
  const torrentModel = useTorrentModel();
  const dialogsModel = useDialogsModel();
  const { data, loading, run } = useRequest(torrentModel.loadAllTask, {
    pollingInterval: 1000,
    pollingWhenHidden: false,
    manual: false,
  });
  return (
    <div className={classes.root}>
      <AddMargaretLinkDialog
        onOk={(link) => {
          addMargaretLink(link);
          dialogsModel.setDialog(DialogKeys.AddMargaretDialogKey, false);
        }}
        onCancel={() => dialogsModel.setDialog(DialogKeys.AddMargaretDialogKey, false)}
        open={Boolean(dialogsModel.activeDialog[DialogKeys.AddMargaretDialogKey])}
      />
      {
        torrentModel.torrents.map((torrent, idx) => (
          <div className={classes.item} key={idx}>
            <DownloadItem
              status={torrent.Status}
              name={torrent.TorrentName}
              size={torrent.TotalLength}
              progress={torrent.Percentage}
              onStart={() => startDownload(torrent.HexString)}
              onPause={() => stopDownload(torrent.HexString)}
              speed={torrent.DownloadSpeed}
              remain={torrent.LeftTime}
            />
          </div>
        ))
      }
    </div>
  );
};

export default HomePage;
