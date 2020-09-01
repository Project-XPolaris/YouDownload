import React from 'react';
import useStyles from './style';
import useTorrentModel from '../../models/torrents';
import { useRequest } from 'ahooks';
import { addMargaretLink, addTorrentFile, startDownload, stopDownload, deleteTorrent } from '../../api/torrent';
import AddMargaretLinkDialog from '../../components/AddMargaretLinkDialog';
import useDialogsModel, { DialogKeys } from '../../models/dialogs';
import DownloadItem from '../../components/DownloadItem';
import { LinkOff } from '@material-ui/icons';
import AddTorrentFileDialog from '../../components/AddTorrentFileDialog';

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
      <AddTorrentFileDialog
        onOk={(file) => {
          addTorrentFile(file)
          dialogsModel.setDialog(DialogKeys.AddTorrentFileDialogKey, false);
        }}
        onCancel={() => dialogsModel.setDialog(DialogKeys.AddTorrentFileDialogKey, false)}
        open={Boolean(dialogsModel.activeDialog[DialogKeys.AddTorrentFileDialogKey])}
      />
      {torrentModel.torrents.length === 0 &&
      <div className={classes.empty}>
        <LinkOff className={classes.emptyIcon} />
      </div>
      }
     
    </div>
  );
};

export default HomePage;
