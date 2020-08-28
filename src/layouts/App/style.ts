import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display:"flex",
      flexDirection:"row"
    },
    main:{
      flexGrow:1
    }
  }),
);

export default useStyles
