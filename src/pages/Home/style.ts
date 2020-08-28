import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor:"#EEE",
      height:"100%",
      overflowY:"scroll",
      paddingLeft:theme.spacing(2),
      paddingRight:theme.spacing(2),
      paddingTop:theme.spacing(8),
      paddingBottom:theme.spacing(2),
      boxSizing:"border-box"
    },
    item:{
      marginBottom:theme.spacing(1)
    }
  }),
);
export default useStyles
