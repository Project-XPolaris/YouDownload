import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiDialogContent-root': {
        padding: 0
      }

    },
    button: {
      color: theme.palette.primary.dark
    },
    pathHeader: {
      padding: theme.spacing(2)
    },
    headerItem: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      display: 'flex',
      alignItems: 'center'
    },
    headerDivider: {
      backgroundColor: '#353535',
      width: '100%',
      height: 1
    },
    pathInput: {
      flex: 1,
      marginRight: theme.spacing(2),
      width: theme.spacing(40)
    },
    linkIcon: {
      marginLeft: 4,
      marginRight: theme.spacing(2),
    }
  })
)
export default useStyles
