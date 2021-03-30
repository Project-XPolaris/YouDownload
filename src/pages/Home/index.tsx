import React, { Fragment, ReactElement } from 'react'
import useStyles from './style'
import { addMargaretLink, addTorrentFile } from '../../api/torrent'
import AddMargaretLinkDialog from '../../components/AddMargaretLinkDialog'
import useDialogsModel, { DialogKeys } from '../../models/dialogs'
import AddTorrentFileDialog from '../../components/AddTorrentFileDialog'
import { Grid } from '@material-ui/core'
import InfoCard from '../../components/InfoCard'
import { DownloadTask } from '../../api/task'
import { addFileDownloadTask } from '../../api/file'
import PathSelectDialog from '../../components/PathSelectDialog'

export interface HomePagePropsType {
  torrent?:DownloadTask
}

const HomePage = ({ torrent }: HomePagePropsType):ReactElement => {
  const classes = useStyles()
  const dialogsModel = useDialogsModel()

  return (
    <div className={classes.root}>
      <PathSelectDialog
        open={Boolean(dialogsModel.activeDialog[DialogKeys.AddLinkDialogKey])}
        onCancel={() => dialogsModel.setDialog(DialogKeys.AddLinkDialogKey, false)}
        onOk={(addr) => {
          addFileDownloadTask(addr)
          dialogsModel.setDialog(DialogKeys.AddLinkDialogKey, false)
        }}
      />
      <AddMargaretLinkDialog
        onOk={(link) => {
          addMargaretLink(link)
          dialogsModel.setDialog(DialogKeys.AddMargaretDialogKey, false)
        }}
        onCancel={() => dialogsModel.setDialog(DialogKeys.AddMargaretDialogKey, false)}
        open={Boolean(dialogsModel.activeDialog[DialogKeys.AddMargaretDialogKey])}
      />
      <AddTorrentFileDialog
        onOk={(file) => {
          addTorrentFile(file)
          dialogsModel.setDialog(DialogKeys.AddTorrentFileDialogKey, false)
        }}
        onCancel={() => dialogsModel.setDialog(DialogKeys.AddTorrentFileDialogKey, false)}
        open={Boolean(dialogsModel.activeDialog[DialogKeys.AddTorrentFileDialogKey])}
      />
      {
        torrent &&
        <Fragment>
          <div className={classes.title}>
            {torrent.name}
          </div>
          <Grid container spacing={2} className={classes.infoContainer}>
            <Grid item>
              <InfoCard label={torrent.status} value={torrent.speed}
                className={classes.infoCard} />
            </Grid>
            <Grid item>
              <InfoCard label={'文件大小'} value={torrent.total_size} className={classes.infoCard} />
            </Grid>
            {/* <Grid item> */}
            {/*  <InfoCard label={'所需时间'} value={torrent.LeftTime} className={classes.infoCard} /> */}
            {/* </Grid> */}
          </Grid>
          {/* <div className={classes.label}> */}
          {/*  文件信息 */}
          {/* </div> */}
          {/* { */}
          {/*  torrent.Files.map((file, idx) => ( */}
          {/*    <div className={classes.fileItem} key={idx}> */}
          {/*      <FileItem */}
          {/*        fileSize={file.Size} */}
          {/*        filename={file.Path} */}
          {/*        priority={file.Priority} */}
          {/*        onChangePriority={level => changeFilePriority(torrent?.HexString,file.Path,level)} */}
          {/*      /> */}
          {/*    </div> */}
          {/*  )) */}
          {/* } */}
        </Fragment>
      }

    </div>
  )
}

export default HomePage
