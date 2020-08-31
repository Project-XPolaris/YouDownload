import React from 'react';
import { createMuiTheme, createStyles } from '@material-ui/core';
import { makeStyles, Theme as AugmentedTheme } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import { ThemeProvider } from 'styled-components';
import useDialogsModel, { DialogKeys } from "../../models/dialogs"
import ConfirmDialog from '../../components/ConfirmDialog';
export interface BaseLayoutPropsType {
  children: any
}

const theme = createMuiTheme({});
const BaseLayout = ({ children }: BaseLayoutPropsType) => {
  const dialogsModel = useDialogsModel()

  return (
    <ThemeProvider theme={theme}>
      <ConfirmDialog 
        title={dialogsModel.confirmDialogOptions.title}
        content={dialogsModel.confirmDialogOptions.content}
        onOk={dialogsModel.confirmDialogOptions.onOk}
        onCancel={() => dialogsModel.setDialog(DialogKeys.ConfirmDialogKey,false)}
        open={Boolean(dialogsModel.activeDialog[DialogKeys.ConfirmDialogKey])}
      />
      {children}
    </ThemeProvider>
  );
};

export default BaseLayout;
