import React, { Fragment, useEffect } from 'react';
import useStyles from './style';
import useTorrentModel, { reduceTorrent } from '../../models/torrents';
import { useRequest } from 'ahooks';
import {
  addMargaretLink,
  addTorrentFile,
  startDownload,
  stopDownload,
  deleteTorrent,
  getAllTorrent, changeFilePriority,
} from '../../api/torrent';
import AddMargaretLinkDialog from '../../components/AddMargaretLinkDialog';
import useDialogsModel, { DialogKeys } from '../../models/dialogs';
import DownloadItem from '../../components/DownloadItem';
import { LinkOff } from '@material-ui/icons';
import AddTorrentFileDialog from '../../components/AddTorrentFileDialog';
import { Grid } from '@material-ui/core';
import InfoCard from '../../components/InfoCard';
import FileItem from '../../components/TorrentFileItem';
import { TorrentEntity } from '../../api/entites/TorrentEntity';

export interface HomePagePropsType {
  torrent?:TorrentEntity
}

const HomePage = ({torrent}: HomePagePropsType) => {
  const classes = useStyles();
  const torrentModel = useTorrentModel();
  const dialogsModel = useDialogsModel();

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
        torrent &&
        <Fragment>
          <div className={classes.title}>
            {torrent.TorrentName}
          </div>
          <Grid container spacing={2} className={classes.infoContainer}>
            <Grid item>
              <InfoCard label={torrent.Status} value={torrent.DownloadSpeed}
                        className={classes.infoCard} />
            </Grid>
            <Grid item>
              <InfoCard label={'文件大小'} value={torrent.TotalLength} className={classes.infoCard} />
            </Grid>
            <Grid item>
              <InfoCard label={'所需时间'} value={torrent.LeftTime} className={classes.infoCard} />
            </Grid>
          </Grid>
          <div className={classes.label}>
            文件信息
          </div>
          {
            torrent.Files.map((file, idx) => (
              <div className={classes.fileItem} key={idx}>
                <FileItem
                  fileSize={file.Size}
                  filename={file.Path}
                  priority={file.Priority}
                  onChangePriority={level => changeFilePriority(torrent?.HexString,file.Path,level)}
                />
              </div>
            ))
          }
        </Fragment>
      }


    </div>
  );
};

export default HomePage;
