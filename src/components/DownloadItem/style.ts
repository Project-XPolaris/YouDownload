import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
    },
    left: {
      display: 'flex',
      alignItems:"center"
    },
    header:{
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center"
    },
    meta: {
      marginLeft: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
    },
    progressContainer:{
      marginTop:theme.spacing(1),
      display:"flex",
      alignItems: "center"
    },
    progress:{
      flexGrow:1,
      marginRight:theme.spacing(2)
    },
    progressLabel:{
      ...theme.typography.subtitle1
    },
    icon:{
      backgroundColor:theme.palette.primary.main,
      color:theme.palette.primary.contrastText
    },
    nameInfo:{
      ...theme.typography.body1,
      fontSize:14
    },
    sizeInfo:{
      ...theme.typography.body1,
      fontsize:6
    },
    info:{
      marginTop:theme.spacing(2),
      display:"flex"
    },
    infoIcon:{
      marginRight: theme.spacing(1)
    },
    remainInfo:{
      ...theme.typography.body1,
      width:theme.spacing(40),
      display:"flex",
      alignItems:"center",
      overflow:"hidden"
    },
    speedInfo:{
      ...theme.typography.body1,
      marginLeft: theme.spacing(2),
      width:theme.spacing(40),
      display:"flex",
      alignItems:"center"
    }
  }),
);
export default useStyles;
