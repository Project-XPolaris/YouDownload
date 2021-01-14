import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor:theme.palette.background.default,
      height:"100vh"
    },
   header:{
      display: 'flex',
     padding:theme.spacing(2)
   },
    chip:{
      marginRight: theme.spacing(2)
    }
  }),
);

export default useStyles
