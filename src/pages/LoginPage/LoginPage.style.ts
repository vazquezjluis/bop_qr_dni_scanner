import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundColor: '#303030',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
  },
  logo: {
    marginRight: theme.spacing(2),
    width: '50px',
  },
  title: {
    flexGrow: 1,
  },
  footer: {
    marginTop: 'auto',
    padding: theme.spacing(2),
  },
}));

export default useStyles;