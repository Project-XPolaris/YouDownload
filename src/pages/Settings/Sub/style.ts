import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor:theme.palette.background.default,
      height:"100vh"
    },
   
  }),
);

export default useStyles
