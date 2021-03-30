import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    input: {
      width: theme.spacing(50)
    }
  })
)
export default useStyles
