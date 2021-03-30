import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      position: 'fixed',
      width: '100vw',
      backgroundColor: 'white',
      borderBottom: '1px #eeeeee solid'
    },
    title: {
      flexGrow: 1,
      color: theme.palette.text.primary,
      '-webkit-app-region': 'drag'
    },
    toolbar: {

    },
    actionIcon: {
      color: theme.palette.text.primary
    },
    divider: {
      backgroundColor: theme.palette.text.secondary,
      height: theme.spacing(2),
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2)
    }
  })
)
export default useStyles
