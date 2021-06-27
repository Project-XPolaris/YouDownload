import useStyles from './style'
import React, { ReactElement, useState } from 'react'
import { Button, Fab } from '@material-ui/core'
import { Check } from '@material-ui/icons'
import PathSelectDialog from './PathSelectDialog'
import { initUser } from '../../api/auth'
import { useHistory } from 'react-router-dom'

export interface SetupPagePropsType {

}

const SetupPage = ({}: SetupPagePropsType):ReactElement => {
  const classes = useStyles()
  const history = useHistory()
  const [selectPath, setSelectPath] = useState<string | undefined>()
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)
  const onApply = async () => {
    if (!selectPath) {
      return
    }
    await initUser(selectPath)
    history.replace('/home')
  }
  return (
    <div className={classes.root}>
      <PathSelectDialog open={isDialogOpen} onCancel={() => { setIsDialogOpen(false) }} onOk={(path) => { setSelectPath(path); setIsDialogOpen(false) }}/>
      <div className={classes.title}>
        Setup
      </div>
      <div className={classes.content}>
        <div className={classes.label}>
          Download folder: {selectPath}
        </div>
        <Button variant={'contained'} color={'primary'} onClick={() => setIsDialogOpen(true)}>
          Pick up download folder
        </Button>
      </div>

      <Fab color='primary' className={classes.fab} onClick={onApply} disabled={selectPath === undefined}>
        <Check />
      </Fab>
    </div>
  )
}

export default SetupPage
