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
            onStart={async () => {
              await startDownload(task.id)
              await taskModel.refreshTask()
            }}
            onPause={async () => {
              await stopDownload(task.id)
              await taskModel.refreshTask()
            }}
            onClick={() => onTaskClick(task)}
            size={task.length}
            status={task.status}
            speed={task.speed}
            onDelete={() => {
              dialogsModel.showConfirmDialog({
                title: '删除确认',
                content: '是否删除任务？',
                onOk: async () => {
                  await deleteTask(task.id)
                  dialogsModel.setDialog(DialogKeys.ConfirmDialogKey, false)
                  await taskModel.refreshTask()
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
