import { createModel } from 'hox';
import { useState } from 'react';

export const DialogKeys = {
  AddMargaretDialogKey: 'add/margaret',
  AddTorrentFileDialogKey: 'add/torrentFile',
  ConfirmDialogKey: 'global/confirm',
};
export interface ConfirmDialogOption {
  title: string
  content: string
  onOk: () => void
}
const DialogsModel = () => {
  const [activeDialog, setActiveDialog] = useState<{ [key: string]: boolean }>({});
  const [confirmDialogOptions, setConfirmDialogOptions] = useState<ConfirmDialogOption>({
    title: "",
    content: "",
    onOk: () => { }
  });
  const setDialog = (key: string, open: boolean) => {
    setActiveDialog({
      ...activeDialog,
      [key]: open,
    });
    console.log(activeDialog);
  };
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
  };
};
export default createModel(DialogsModel);
