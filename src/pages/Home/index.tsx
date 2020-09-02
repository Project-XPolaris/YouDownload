import React, { Fragment } from 'react';
import useStyles from './style';
import useTorrentModel from '../../models/torrents';
import { useRequest } from 'ahooks';
import { addMargaretLink, addTorrentFile, startDownload, stopDownload, deleteTorrent } from '../../api/torrent';
import AddMargaretLinkDialog from '../../components/AddMargaretLinkDialog';
import useDialogsModel, { DialogKeys } from '../../models/dialogs';
import DownloadItem from '../../components/DownloadItem';
import { LinkOff } from '@material-ui/icons';
import AddTorrentFileDialog from '../../components/AddTorrentFileDialog';
import { Grid } from '@material-ui/core';
import InfoCard from '../../components/InfoCard';
import FileItem from '../../components/TorrentFileItem';

export interface HomePagePropsType {

}

const HomePage = ({ }: HomePagePropsType) => {
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
          addTorrentFile(file);
          dialogsModel.setDialog(DialogKeys.AddTorrentFileDialogKey, false);
        }}
        onCancel={() => dialogsModel.setDialog(DialogKeys.AddTorrentFileDialogKey, false)}
        open={Boolean(dialogsModel.activeDialog[DialogKeys.AddTorrentFileDialogKey])}
      />
      {
        torrentModel.displayTorrent &&
        <Fragment>
          <div className={classes.title}>
            {torrentModel.displayTorrent.TorrentName}
          </div>
          <Grid container spacing={2} className={classes.infoContainer}>
            <Grid item>
              <InfoCard label={torrentModel.displayTorrent?.Status} value={torrentModel.displayTorrent?.DownloadSpeed}
                className={classes.infoCard} />
            </Grid>
            <Grid item>
              <InfoCard label={'文件大小'} value={torrentModel.displayTorrent?.TotalLength} className={classes.infoCard} />
            </Grid>
            <Grid item>
              <InfoCard label={'所需时间'} value={torrentModel.displayTorrent?.LeftTime} className={classes.infoCard} />
            </Grid>
          </Grid>
          <div className={classes.label}>
            文件信息
          </div>
          {
            torrentModel.displayTorrent.Files.map((file,idx) => (
              <div className={classes.fileItem} key={idx}>
                <FileItem fileSize={file.Size} filename={file.Path}  />
              </div>
            ))
          }

        </Fragment>
      }


    </div>
  );
};

export default HomePage;
