import React, { useState } from 'react';
import { useFormik } from 'formik';
import { TextField, Grid, InputAdornment } from '@material-ui/core';
import { loginSchema } from '../../utils/validation';
import useStyles from './LoginForm.styles';
import AccountCircle from '@mui/icons-material/AccountCircle'
import LockRoundedIcon from '@mui/icons-material/LockRounded'
import { Alert, Button } from '@mui/material';


interface LoginFormProps {
    onSubmit: (username: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }: LoginFormProps) => {
    const classes = useStyles();
    const [error, setError] = useState('');

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: loginSchema,
        onSubmit: async (values: { username: string; password: string; }, { setSubmitting }: any) => {
            try {
                setError('');
                await onSubmit(values.username, values.password);
            } catch (e: any) {
                setError(e.message);
            } finally {
                setSubmitting(false);
            }
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="username"
                        name="username"
                        label="Usuario"
                        type="text"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        error={formik.touched.username && Boolean(formik.errors.username)}
                        helperText={formik.touched.username && formik.errors.username}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle sx={{ color: 'orange' }} />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="password"
                        name="password"
                        label="Contraseña"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockRoundedIcon sx={{ color: 'orange' }} />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        type="submit"
                        disabled={formik.isSubmitting}
                        sx={{ mt: 3, mb: 2, color: 'secondary', backgroundColor: 'orange' }}
                    >
                        Iniciar sesión
                    </Button>
                </Grid>
                {error && (
                    <Grid item xs={12}>
                        <Alert severity="error" variant='filled'>
                            {error}
                        </Alert>
                    </Grid>
                )}
            </Grid>
        </form>
    );
};

export default LoginForm;

