import React from 'react';
import { Grid, Typography, Container, AppBar, Toolbar, Link, Box } from '@material-ui/core';
import LoginForm from '../../components/LoginForm/LoginForm';
import { useAuth } from '../../hooks/useAuth';
import useStyles from './LoginPage.style';

const LoginPage: React.FC = () => {
  const classes = useStyles();
  const { signIn } = useAuth();

  return (
    <Box className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: 'black', marginBottom: '35px', height: '80px', paddingTop: '10px' }} >
        <Toolbar>
          <img src="./img/logo.jpeg" alt="Bingo Oasis Pilar" className={classes.logo} />
          <Typography variant="caption" className={classes.title}>
            Document Scanner - Bingo Oasis Pilar
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="xs">
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="h4" component="h1" align="center" gutterBottom>
              Iniciar sesión
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <LoginForm onSubmit={signIn} />
          </Grid>
        </Grid>
      </Container>
      <footer className={classes.footer}>
        <Typography variant="body2" color="inherit" align="center">
          {'Powered by '}
          <Link color="inherit" href="https://www.control-app.com">
            Control-App
          </Link>
        </Typography>
      </footer>
    </Box>
  );
};

export default LoginPage;
