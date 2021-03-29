import useStyles from './style'
import React from 'react'
import DownloadTaskItem from '../../../components/DownloadTaskItem'
import useTorrentModel from '../../../models/torrents'
import useDialogsModel, { DialogKeys } from '../../../models/dialogs'
import { deleteTask, startDownload, stopDownload } from '../../../api/torrent'
import { DownloadTask } from '../../../api/task'
import useTaskModel from '../../../models/task'

export interface HomeSubPanelPropsTypes {
    tasks?:DownloadTask[]
}
const HomeSubPanel = ({ tasks = [] }: HomeSubPanelPropsTypes) => {
  const classes = useStyles()
  const torrentModel = useTorrentModel()
  const dialogsModel = useDialogsModel()
  const taskModel = useTaskModel()
  return (
    <div className={classes.root}>
      {
        taskModel.getTasks().map((task, idx) => (
          <DownloadTaskItem
            key={idx}
            title={task.name}
            progress={task.progress}
            onStart={() => {
              startDownload(task.id)
            }}
            onPause={() => {
              stopDownload(task.id)
            }}
            onClick={() => {}}
            size={task.length}
            status={task.status}
            speed={task.speed}
            onDelete={() => {
              dialogsModel.showConfirmDialog({
                title: '删除确认',
                content: '是否删除任务？',
                onOk: () => {
                  deleteTask(task.id)
                  dialogsModel.setDialog(DialogKeys.ConfirmDialogKey, false)
                }
              })
            }}
            type={task.type}
          />
        ))
      }

    </div>
  )
}

export default HomeSubPanel
