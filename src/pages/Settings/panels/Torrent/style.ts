import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
     marginTop:theme.spacing(8)
    },

  }),
);

export default useStyles
