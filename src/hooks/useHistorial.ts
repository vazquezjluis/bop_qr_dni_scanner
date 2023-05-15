import api from '../api/bop'
import {  type  IHistorial } from './types'



export async function getHistorialScaner (): Promise<IHistorial[]> {
    try {
      const { data } = await api.get('/scanner/historial', {
        // ...params
      })
      return data
    } catch (error) {
      console.log('getHistorialScaner: ', error)
        return []
    }
  }

