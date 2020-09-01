import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position:"fixed",
      left:theme.spacing(48),
      width:"calc(100% - 384px)",
      backgroundColor:theme.palette.common.white
    },
    title:{
      flexGrow:1,
      color:theme.palette.text.primary,
      "-webkit-app-region":"drag"
    },
    toolbar:{

    },
    actionIcon:{
      color:theme.palette.text.primary
    },
    divider:{
      backgroundColor:theme.palette.text.secondary,
      height:theme.spacing(2),
      marginLeft:theme.spacing(2),
      marginRight:theme.spacing(2)
    }
  }),
);
export default useStyles
