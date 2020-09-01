import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
     
      margin:theme.spacing(2)
    },
    header:{
      display:"flex",
      alignItems:"center",
      padding:theme.spacing(2),
    },
    icon:{
      backgroundColor:theme.palette.primary.dark,
      color:theme.palette.primary.contrastText
    },
    content:{
      
      padding:theme.spacing(2),
    },
    meta:{
      ...theme.typography.subtitle1,
      overflowWrap:"break-word",
      overflow:"hidden",
      lineHeight:"1.5em",
      height:"3em",
      wordBreak:"break-all",
      marginLeft:theme.spacing(2),
      fontSize:14,
      flexGrow:1,
    },
    downloadProgress:{
      
      display:"flex",
      alignItems:"center"
    },
    progressWrap:{
      flexGrow:1
    },
    progressLabel:{
      ...theme.typography.caption,
      marginLeft:theme.spacing(2),
    },
    actions:{
      paddingTop:0
    },
    infos:{
      display:"flex"
    },
    infoWrap:{
      display:"flex",
      marginRight:theme.spacing(2),
      alignItems:"center"
    },
    infoLabel:{
      ...theme.typography.caption
    },
    infoIcon:{
      marginRight:theme.spacing(1)
    }
  }),
);

export default useStyles
