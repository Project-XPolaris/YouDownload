import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100vh',
      padding: theme.spacing(2),
      paddingTop: theme.spacing(8),
      position: 'relative',
      boxSizing: 'border-box',
      backgroundColor: '#FCFCFC'
    },
    title: {
      ...theme.typography.h4,
      fontWeight: 300
    },
    tabs: {
      marginTop: theme.spacing(4)
    },
    input: {
      marginTop: theme.spacing(4)
    },
    fab: {
      right: 16,
      bottom: 16,
      position: 'absolute'
    }
  })
)

export default useStyles
