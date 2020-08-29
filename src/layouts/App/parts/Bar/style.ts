import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position:"fixed",
      paddingLeft:theme.spacing(8)
    },
    title:{
      flexGrow:1,
      color:theme.palette.primary.contrastText,
      "-webkit-app-region":"drag"
    },
    toolbar:{

    },
    actionIcon:{
      color:theme.palette.primary.contrastText
    },
    divider:{
      backgroundColor:theme.palette.primary.dark,
      height:theme.spacing(2),
      marginLeft:theme.spacing(2),
      marginRight:theme.spacing(2)
    }
  }),
);
export default useStyles
