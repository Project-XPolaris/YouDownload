import useStyles from './style';
import React from 'react';
import {
  Paper,
  Avatar,
  LinearProgress,
  Card,
  IconButton,
  CardActions,
  CardContent,
  CardActionArea,
} from '@material-ui/core';
import { Folder, Favorite, Share, Stop, PlayArrow, DeleteForever, Pause, Speed, DataUsage } from '@material-ui/icons';

export interface DownloadTaskItemPropsTypes {
  title: string
  progress: number
  onStart: () => void
  onPause: () => void
  onDelete: () => void
  status: string
  speed: string
  size: string
  onClick: () => void
}

const DownloadTaskItem = ({ title, progress, onStart, onPause, onDelete, status, speed, size, onClick }: DownloadTaskItemPropsTypes) => {
  const classes = useStyles();
  const displayProgress = Math.round(progress * 100);
  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.header} onClick={onClick}>
        <Avatar className={classes.icon}>
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
              {size}
            </div>
          </div>
          <div className={classes.infoWrap}>
            <Speed className={classes.infoIcon} />
            <div className={classes.infoLabel}>
              {speed}
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
              status === 'Stopped' ? (
                <IconButton
                  onClick={onStart}
                  size="small"
                >
                  <PlayArrow />
                </IconButton>
              ) : (
                <IconButton
                  onClick={onPause}
                  size="small"
                >
                  <Pause />
                </IconButton>
              )
            }
            <IconButton
              size="small"
              onClick={onDelete}
            >
              <DeleteForever />
            </IconButton>
          </div>
        </div>
      </div>


    </Card>
  );
};

export default DownloadTaskItem;
