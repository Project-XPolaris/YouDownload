import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#EEE',
      height: '100vh',
      overflowY: 'auto',
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(2),
      boxSizing: 'border-box',
      overflowX: 'hidden'
    },
    title: {
      ...theme.typography.h6
    },
    infoContainer: {
      marginTop: theme.spacing(3)
    },
    infoCard: {
      minWidth: theme.spacing(20)
    },
    label: {
      ...theme.typography.caption,
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    },
    fileItem: {
      marginBottom: theme.spacing(2)
    }
  })
)
export default useStyles
