import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor:"#EEE",
      height:"100vh",
      overflowY:"scroll",
      paddingLeft:theme.spacing(2),
      paddingRight:theme.spacing(2),
      paddingTop:theme.spacing(8),
      paddingBottom:theme.spacing(2),
      boxSizing:"border-box"
    },
    empty:{
      height: "100%",
      textAlign:"center",
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
    },
    emptyIcon:{
      color:theme.palette.grey['500'],
      fontSize:theme.spacing(10)
    },
    item:{
      marginBottom:theme.spacing(1)
    }
  }),
);
export default useStyles
