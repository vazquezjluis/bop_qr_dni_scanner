import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      marginBottom: theme.spacing(2),
    },
    '& .MuiInputLabel-root': {
      color: 'white',
    },
    '& .MuiInputBase-root': {
      color: 'white',
    },
    '& .MuiFormHelperText-root': {
      color: 'white',
    },
  },
}));

export default useStyles;
