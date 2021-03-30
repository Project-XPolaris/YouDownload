import React, { useEffect, useState } from 'react'
import useStyles from './style'
import { Button, Dialog, DialogActions, DialogContent, InputBase } from '@material-ui/core'
import { Link } from '@material-ui/icons'
import { fetchDirectoryContent, FileItem } from '../../api/explore'

export interface PathSelectDialogPropsType {
  open:boolean
  onCancel:() => void
  onOk:(addr:string) => void
}

const PathSelectDialog = ({ open = false, onCancel, onOk }: PathSelectDialogPropsType):React.ReactElement => {
  const classes = useStyles()
  const [currentPath, setCurrentPath] = useState<string | undefined>()
  const [pathInput, setPathInput] = useState<string | undefined>()
  const [addr, setAddr] = useState<string | undefined>()
  const [content, setContent] = useState<FileItem[]>([])
  const [sep, setSep] = useState<string | undefined>()
  useEffect(() => {
    (async () => {
      const response = await fetchDirectoryContent(currentPath)
      setContent(response.files.filter(it => it.type === 'Directory'))
      setPathInput(response.path)
      setSep(response.sep)
    })()
  }, [currentPath])
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
            <InputBase className={classes.pathInput} onChange={e => setAddr(e.target.value)}/>
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
