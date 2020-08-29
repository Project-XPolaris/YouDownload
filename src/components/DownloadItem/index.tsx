import React from 'react';
import { Avatar, IconButton, LinearProgress, Paper } from '@material-ui/core';
import { Folder, Pause, PlayArrow, Speed, Timer } from '@material-ui/icons';
import useStyles from './style';

export interface DownloadItemPropsType {
  status: string
  name: string
  size: string
  progress: number
  onStart: () => void
  onPause: () => void
  speed:string
  remain:string
}

const DownloadItem = ({ status, name, size, progress, onStart, onPause,speed,remain }: DownloadItemPropsType) => {
  const displayProgress = Math.round(progress * 100);
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <div className={classes.header}>
        <div className={classes.left}>
          <Avatar className={classes.icon}>
            <Folder />
          </Avatar>
          <div className={classes.meta}>
            <div className={classes.nameInfo}>
              {name}
            </div>
            <div className={classes.sizeInfo}>
              {size}
            </div>
          </div>
        </div>
        <div>
          {
            status === 'Stopped' ? (
              <IconButton
                onClick={onStart}
              >
                <PlayArrow />
              </IconButton>
            ) : (
              <IconButton
                onClick={onPause}
              >
                <Pause />
              </IconButton>
            )
          }
        </div>
      </div>
      <div className={classes.info}>
        <div className={classes.remainInfo}>
          <Timer className={classes.infoIcon} /> {remain}
        </div>
        <div className={classes.speedInfo}>
          <Speed className={classes.infoIcon} /> {speed}
        </div>
      </div>
      <div className={classes.progressContainer}>
        <LinearProgress variant="determinate" value={displayProgress} className={classes.progress} />
        <div className={classes.progressLabel}>
          {displayProgress} %
        </div>
      </div>
    </Paper>
  );
};

export default DownloadItem;
