import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundColor: '#303030',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
  },
  footer: {
    marginTop: 'auto',
    padding: theme.spacing(2),
    marginBottom: '20px',
  },
}));

export default useStyles;