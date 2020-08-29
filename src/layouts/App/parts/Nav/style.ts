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
    }
  }),
);
export default useStyles
