import React, { useState } from 'react'
import useStyles from './style'
import { Button, Dialog, DialogActions, DialogContent, InputBase } from '@material-ui/core'
import { Link } from '@material-ui/icons'

export interface PathSelectDialogPropsType {
  open:boolean
  onCancel:() => void
  onOk:(addr:string) => void
}

const PathSelectDialog = ({ open = false, onCancel, onOk }: PathSelectDialogPropsType):React.ReactElement => {
  const classes = useStyles()
  const [addr, setAddr] = useState<string | undefined>()
  return (
    <Dialog
      open={open}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
      className={classes.root}
      onClose={onCancel}
    >
      <DialogContent>
        <div className={classes.pathHeader}>
          <div className={classes.headerItem}>
            <Link className={classes.linkIcon}/>
            <InputBase className={classes.pathInput} onChange={e => setAddr(e.target.value)} placeholder={'文件下载链接'}/>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button
          className={classes.button}
          onClick={() => {
            if (addr) {
              onOk(addr)
            }
          }}
        >
          Add
        </Button>
        <Button
          className={classes.button}
          onClick={onCancel}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default PathSelectDialog
