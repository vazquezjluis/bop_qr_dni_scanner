import React, { useEffect } from 'react';
import { List, ListItem, ListItemText, TextField } from '@material-ui/core';
import { useState } from 'react';
import { IHistorial } from '../../hooks/types';
import { useHistorialStore } from '../../store/historial';

const Historial: React.FC = () => {
  const historial = useHistorialStore(state => state.historial);
  const getHistorial = useHistorialStore(state => state.getHistorial);
  const [filtro, setFiltro] = useState('');

  useEffect(() => {
    getHistorial();
  }, [getHistorial]);

  return (
    <>
      <TextField 
        label="Buscar" 
        variant="outlined" 
        value={filtro}
        onChange={(e: any) => setFiltro(e.target.value)}
        style={{ marginBottom: '1em' }}
      />
      <List>
      {historial.
        filter((item: IHistorial) => 
          item.cliente.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
          item.cliente.apellido.toLowerCase().includes(filtro.toLowerCase()) ||
          item.cliente.documento.toLowerCase().includes(filtro.toLowerCase())
        ).
        map((item: IHistorial) => (
        <ListItem key={item.id}>
          <ListItemText 
            primary={`Cliente: ${item.cliente.nombre} ${item.cliente.apellido}, Documento: ${item.cliente.documento}`}
            secondary={`Escaneado por: ${item.usuario.nombre} el: ${new Date(item.fecha_escaneo).toLocaleDateString('es-AR', {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'})}`} 
          />
        </ListItem>
      ))}
      </List>

      {/* <List>
        {historial
        .filter((item: IHistorial) => 
          item.cliente.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
          item.cliente.apellido.toLowerCase().includes(filtro.toLowerCase()) ||
          item.cliente.documento.toLowerCase().includes(filtro.toLowerCase())
        )
        .map((item: IHistorial, index: number) => (
          <ListItem key={index}>
            <ListItemText
              primary={`${item.cliente.nombre} ${item.cliente.apellido}`}
              secondary={`${new Date(item.fecha_escaneo).toLocaleDateString('es-AR', {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'})}`}
            />
          </ListItem>
        ))}
      </List> */}
    </>
  );
}

export default Historial;
