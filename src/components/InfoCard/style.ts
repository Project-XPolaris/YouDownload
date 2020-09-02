import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding:theme.spacing(2)
    },
    label:{
      ...theme.typography.caption
    },
    value:{
      ...theme.typography.h4,
      marginTop:theme.spacing(2)
    }
  }),
);

export default useStyles
