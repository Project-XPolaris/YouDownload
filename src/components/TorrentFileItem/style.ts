import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {

    },
    fileIcon: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main
    }
  })
)

export default useStyles
