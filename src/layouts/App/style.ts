import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
      height: '100vh'
    },
    main: {
      flexGrow: 1,
      marginLeft: theme.spacing(48)
    }
  })
)

export default useStyles
