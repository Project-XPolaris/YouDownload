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
import PathSelectDialog from '../../components/FolderSelectDialog'
import { TaskEntity } from '../../api/entites/task'
import fileSize from 'filesize'
import useTaskModel from '../../models/task'
import humanizeDuration from 'humanize-duration'

export interface HomePagePropsType {
  task?: TaskEntity
}

const HomePage = ({ task }: HomePagePropsType): ReactElement => {
  const classes = useStyles()
  const dialogsModel = useDialogsModel()
  const taskModel = useTaskModel()
  const currentTask = taskModel.tasks.find(it => it.id === task?.id)
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
        currentTask &&
        <Fragment>
          <div className={classes.title}>
            {currentTask.name}
          </div>
          <Grid container spacing={2} className={classes.infoContainer}>
            <Grid item>
              <InfoCard
                label={`${currentTask.status}`}
                value={`${fileSize(currentTask.speed)}/s`}
                className={classes.infoCard} />
            </Grid>
            <Grid item>
              <InfoCard label={'文件大小'} value={fileSize(currentTask.length)} className={classes.infoCard} />
            </Grid>
            <Grid item xs={12}>
              <InfoCard label={'预计时间'} value={ humanizeDuration(currentTask.eta * 1000, { round: true, language: 'zh_CN' })}/>
            </Grid>
          </Grid>
        </Fragment>
      }

    </div>
  )
}

export default HomePage
