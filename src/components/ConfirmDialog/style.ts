import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    content:{
      minWidth:theme.spacing(40)
    }
  }),
);
export default useStyles;
