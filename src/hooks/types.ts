
export interface IClientes  {
  codigo: string,
  apellido : string,
  nombre : string,
  sexo : string,
  documento : string,
  ejemplar : string,
  fechaNacimiento : string,
  fechaEmision : string,
}

export interface IUsuarios {
  idUsuarios: number,
  nombre: string,
  usr: string,
  legajo: string
}

export interface IHistorialEscaneo {
  id: number,
  cliente_id: number,
  usuario_id: number,
  fecha: string,
}

export interface IHistorial {
  id: number,
  cliente: IClientes,
  usuario: IUsuarios,
  fecha_escaneo: string,
  usuario_id: number,

}


