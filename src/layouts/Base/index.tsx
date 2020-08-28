import React from 'react';
import { createMuiTheme, createStyles } from '@material-ui/core';
import { makeStyles, Theme as AugmentedTheme } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import { ThemeProvider } from 'styled-components';

export interface BaseLayoutPropsType {
  children: any
}

const theme = createMuiTheme({});
const BaseLayout = ({ children }: BaseLayoutPropsType) => {


  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

export default BaseLayout;
