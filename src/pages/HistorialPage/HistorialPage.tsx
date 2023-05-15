import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import Historial from '../../components/Historial/Historial';

const HistorialPage: React.FC = () => {
    return (
        <Container maxWidth="sm" style={{ backgroundColor: '#303030', color: 'white', minHeight: '100vh', padding: '2em' }}>
            <Grid container spacing={3} alignItems="center" justifyContent="center">
                <Grid item xs={12}>
                    {/* <Typography variant="h4" component="h1" align="center" gutterBottom>
                        Bingo Oasis Pilar
                    </Typography> */}
                    <Typography variant="h6" component="h2" align="center" gutterBottom>
                        Historial
                    </Typography>
                </Grid>
                <Historial />
            </Grid >
        </Container >
    );
};

export default HistorialPage;
