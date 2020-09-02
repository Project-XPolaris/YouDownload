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
      fontSize:18,
      fontWeight:400,
      marginTop:theme.spacing(1)
    }
  }),
);

export default useStyles
