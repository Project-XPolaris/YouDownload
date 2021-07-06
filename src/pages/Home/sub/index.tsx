import useStyles from './style'
import React, { ReactElement } from 'react'
import DownloadTaskItem from '../../../components/DownloadTaskItem'
import useDialogsModel, { DialogKeys } from '../../../models/dialogs'
import { deleteTask, startDownload, stopDownload } from '../../../api/torrent'
import useTaskModel from '../../../models/task'
import { TaskEntity } from '../../../api/entites/task'

export interface HomeSubPanelPropsTypes {
  onTaskClick:(task:TaskEntity) => void
}
const HomeSubPanel = ({ onTaskClick }: HomeSubPanelPropsTypes):ReactElement => {
  const classes = useStyles()
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
            onClick={() => onTaskClick(task)}
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
