import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position:"fixed",
      width:theme.spacing(8),
      height:"100vh",
      backgroundColor:"#2b2b2b",
      paddingTop:theme.spacing(2),
      paddingBottom:theme.spacing(2),
      textAlign:"center",
      boxSizing:"border-box",
      zIndex:theme.zIndex.appBar + 1
    },
    navButton:{
      color:theme.palette.common.white
    },
    navButtonActive:{
      color: theme.palette.primary.light
    },
    logo:{
      width: theme.spacing(4),
      height: theme.spacing(4),
      marginBottom:theme.spacing(2),
      "-webkit-app-region":"drag"
    }
  }),
);
export default useStyles
