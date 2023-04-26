import React from 'react';
import { Typography, Paper } from '@material-ui/core';
import { Grid } from '@mui/material';

interface ScanResultProps {
    scanResult: ScanResultType;
}

export interface ScanResultType {
    codigo: string;
    apellido: string;
    nombre: string;
    sexo: string;
    documento: string;
    ejemplar: string;
    fechaNacimiento: string;
    fechaEmision: string;
}

const ScanResult: React.FC<ScanResultProps> = ({ scanResult }) => {
    return (
        <Grid item xs={12} >
            <Paper elevation={2} style={{ padding: 16, marginTop: 10 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                    Resultado:
                </Typography>
                <Typography>
                    Código: {scanResult.codigo}
                    <br />
                    Apellido: {scanResult.apellido}
                    <br />
                    Nombre: {scanResult.nombre}
                    <br />
                    Sexo: {scanResult.sexo}
                    <br />
                    Documento: {scanResult.documento}
                    <br />
                    Ejemplar: {scanResult.ejemplar}
                    <br />
                    Fecha de nacimiento: {scanResult.fechaNacimiento}
                    <br />
                    Fecha de emisión: {scanResult.fechaEmision}
                </Typography>
            </Paper>
        </Grid>
    );
};

export default ScanResult;
