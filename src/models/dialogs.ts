import { createModel } from 'hox'
import { useState } from 'react'

export const DialogKeys = {
  AddMargaretDialogKey: 'add/margaret',
  AddTorrentFileDialogKey: 'add/torrentFile',
  AddLinkDialogKey: 'add/link',
  ConfirmDialogKey: 'global/confirm'
}
export interface ConfirmDialogOption {
  title: string
  content: string
  onOk?: () => void
}
const DialogsModel = () => {
  const [activeDialog, setActiveDialog] = useState<{ [key: string]: boolean }>({})
  const [confirmDialogOptions, setConfirmDialogOptions] = useState<ConfirmDialogOption>({
    title: '',
    content: ''
  })
  const setDialog = (key: string, open: boolean) => {
    setActiveDialog({
      ...activeDialog,
      [key]: open
    })
  }
  const showConfirmDialog = (options: ConfirmDialogOption) => {
    setConfirmDialogOptions(options)
    setDialog(DialogKeys.ConfirmDialogKey, true)
  }
  return {
    activeDialog,
    setActiveDialog,
    setDialog,
    showConfirmDialog,
    confirmDialogOptions
  }
}
export default createModel(DialogsModel)
