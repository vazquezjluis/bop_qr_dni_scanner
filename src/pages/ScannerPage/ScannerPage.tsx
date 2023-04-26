import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import Scanner from '../../components/Scanner/Scanner';

const ScannerPage: React.FC = () => {
    return (
        <Container maxWidth="sm" style={{ backgroundColor: '#303030', color: 'white', minHeight: '100vh', padding: '2em' }}>
            <Grid container spacing={3} alignItems="center" justifyContent="center">
                <Grid item xs={12}>
                    <Typography variant="h4" component="h1" align="center" gutterBottom>
                        Bingo Oasis Pilar
                    </Typography>
                    <Typography variant="h6" component="h2" align="center" gutterBottom>
                        Escáner de DNI
                    </Typography>
                </Grid>
                <Scanner />
            </Grid >
        </Container >
    );
};

export default ScannerPage;
