import api from '../api/bop'
import { type IClientes } from './types'



export async function addClientAndRecordScan (params: IClientes ) {
    try {
      const { data } = await api.post<IClientes>('/scanner/historial', {
        ...params
      })
      return data
    } catch (error) {
      console.log('addClientAndRecordScan: ', error)
    }
  }

