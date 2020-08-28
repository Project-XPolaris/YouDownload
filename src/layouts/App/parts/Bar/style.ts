import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position:"fixed"
    },
    title:{
      flexGrow:1,
      color:theme.palette.primary.contrastText
    },
    actionIcon:{
      color:theme.palette.primary.contrastText
    }
  }),
);
export default useStyles
