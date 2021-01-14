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
      backgroundColor: '#2a2a2a',
      padding: theme.spacing(2),
    },
    headerItem:{
      marginTop:theme.spacing(1),
      marginBottom:theme.spacing(1),
      display: 'flex',
      alignItems: 'center',
    },
    headerDivider:{
      backgroundColor:"#353535",
      width: "100%",
      height:1
    },
    pathInput: {
      flex: 1,
      marginRight: theme.spacing(2),
      width: theme.spacing(40),
      color: 'white'
    },
    backIcon: {
      marginRight: theme.spacing(2),
      color: 'white',
      width:30,
      height: 30
    },
    linkIcon: {
      marginLeft:4,
      marginRight: theme.spacing(2),
      color: 'white'
    },
    itemContainer: {
      width: theme.spacing(60),
      height: theme.spacing(40),
      overflowX: 'hidden',
      overflowY: 'auto'
    },
    '@global': {
      '*::-webkit-scrollbar': {
        width: '8px'
      },
      '*::-webkit-scrollbar-track': {
        background: 'rgba(0,0,0,0)'
      },
      '*::-webkit-scrollbar-thumb': {
        backgroundColor: '#909090'
      }
    }
  })
)
export default useStyles
