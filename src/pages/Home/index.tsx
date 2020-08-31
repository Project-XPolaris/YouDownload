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
              onDelete={() => {
                dialogsModel.showConfirmDialog({
                  title:"移除任务",
                  content:"将永久性的删除任务",
                  onOk:() => {
                    deleteTorrent(torrent.HexString)
                  }
                })
              }}
            />
          </div>
        ))
      }
    </div>
  );
};

export default HomePage;
