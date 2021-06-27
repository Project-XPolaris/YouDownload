import useStyles from './style'
import React from 'react'
import { Avatar, Card, CardActionArea, IconButton, LinearProgress } from '@material-ui/core'
import { DataUsage, DeleteForever, Folder, Pause, PlayArrow, Speed } from '@material-ui/icons'
import clsx from 'clsx'
import fileSize from 'filesize'

export interface DownloadTaskItemPropsTypes {
  title: string
  progress: number
  onStart: () => void
  onPause: () => void
  onDelete: () => void
  status: string
  speed: number
  size: number
  onClick?: () => void
  type:string
}

const DownloadTaskItem = ({ title, progress, onStart, onPause, onDelete, status, speed, size, onClick, type }: DownloadTaskItemPropsTypes):React.ReactElement => {
  const classes = useStyles()
  const displayProgress = Math.round(progress * 100)
  const displayFileSize = fileSize(size)
  const displaySpeed = `${fileSize(speed)}/s`
  const getActions = () => {
    const stop = {
      action: onPause,
      icon: <Pause />
    }
    const start = {
      action: onStart,
      icon: <PlayArrow />
    }
    const deleteAction = {
      action: onDelete,
      icon: <DeleteForever />
    }
    switch (status) {
      case 'Estimate':
        return [deleteAction]
      case 'Downloading':
        return [stop, deleteAction]
      case 'Stop':
        return [start, deleteAction]
      case 'Complete':
        return [deleteAction]
    }
    return []
  }
  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.header} onClick={onClick}>
        <Avatar className={clsx(classes.icon, type === 'Torrent' ? classes.iconTorrent : classes.iconFile)}>
          <Folder />
        </Avatar>
        <div className={classes.meta}>
          {title}
        </div>

      </CardActionArea>
      <div className={classes.content}>
        <div className={classes.infos}>
          <div className={classes.infoWrap}>
            <DataUsage className={classes.infoIcon} />
            <div className={classes.infoLabel}>
              {displayFileSize}
            </div>
          </div>
          <div className={classes.infoWrap}>
            <Speed className={classes.infoIcon} />
            <div className={classes.infoLabel}>
              {displaySpeed}
            </div>
          </div>
        </div>
        <div className={classes.downloadProgress}>
          <div className={classes.progressWrap}>
            <LinearProgress value={displayProgress} variant="determinate" />
          </div>
          <div className={classes.progressLabel}>
            {displayProgress} %
          </div>
          <div>
            {
              getActions().map((action, idx) => {
                return (
                  <IconButton
                    onClick={action.action}
                    size="small"
                    key={idx}
                  >
                    {action.icon}
                  </IconButton>
                )
              })
            }
          </div>
        </div>
      </div>

    </Card>
  )
}

export default DownloadTaskItem
