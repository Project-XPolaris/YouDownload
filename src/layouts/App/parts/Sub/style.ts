import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position:"fixed",
      width:theme.spacing(40),
      height:"100vh",
      backgroundColor:"#D7D9DB",
      left:theme.spacing(8),
    },
   
  }),
);

export default useStyles
