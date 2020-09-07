import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(8),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      backgroundColor: "#EEE",
      height: "100vh",
      overflowY: "scroll",
      overflowX: "hidden"
    },

  }),
);

export default useStyles
