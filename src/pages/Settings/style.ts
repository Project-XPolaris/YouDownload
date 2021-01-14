import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      backgroundColor: "#EEE",
      height: "100%",
      overflowY: "auto",
      overflowX: "hidden"
    },

  }),
);

export default useStyles
