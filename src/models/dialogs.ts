import { createModel } from 'hox';
import { useState } from 'react';

export const DialogKeys = {
  AddMargaretDialogKey: 'add/margaret',
  AddTorrentFileDialogKey: 'add/torrentFile',
};
const DialogsModel = () => {
  const [activeDialog, setActiveDialog] = useState<{ [key: string]: boolean }>({});
  const setDialog = (key: string, open: boolean) => {
    setActiveDialog({
      ...activeDialog,
      [key]: open,
    });
    console.log(activeDialog);
  };
  return {
    activeDialog,
    setActiveDialog,
    setDialog,
  };
};
export default createModel(DialogsModel);
