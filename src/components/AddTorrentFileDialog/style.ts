import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    input: {
      display: 'none'
    },
    fileName: {
      ...theme.typography.body1,
      minWidth: theme.spacing(40),
      marginTop: theme.spacing(3)
    }
  })
)

export default useStyles
