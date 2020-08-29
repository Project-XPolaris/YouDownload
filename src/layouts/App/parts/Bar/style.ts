import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position:"fixed",
      paddingLeft:theme.spacing(8)
    },
    title:{
      flexGrow:1,
      color:theme.palette.primary.contrastText
    },
    toolbar:{

    },
    actionIcon:{
      color:theme.palette.primary.contrastText
    }
  }),
);
export default useStyles
