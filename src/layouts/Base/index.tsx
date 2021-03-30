import React, { ReactElement } from 'react'
import { createMuiTheme } from '@material-ui/core'
import { ThemeProvider } from 'styled-components'
import useDialogsModel, { DialogKeys } from '../../models/dialogs'
import ConfirmDialog from '../../components/ConfirmDialog'

export interface BaseLayoutPropsType {
  children: any
}

const theme = createMuiTheme({})
const BaseLayout = ({ children }: BaseLayoutPropsType):ReactElement => {
  const dialogsModel = useDialogsModel()
  return (
    <ThemeProvider theme={theme}>
      <ConfirmDialog
        title={dialogsModel.confirmDialogOptions.title}
        content={dialogsModel.confirmDialogOptions.content}
        onOk={dialogsModel.confirmDialogOptions.onOk}
        onCancel={() => dialogsModel.setDialog(DialogKeys.ConfirmDialogKey, false)}
        open={Boolean(dialogsModel.activeDialog[DialogKeys.ConfirmDialogKey])}
      />
      {children}
    </ThemeProvider>
  )
}

export default BaseLayout
