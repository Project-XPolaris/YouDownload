import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    actionIcon: {
      color: theme.palette.text.primary
    }

  })
)
export default useStyles
