import axios from 'axios';
import { REST_API } from '../constants/constants';

export const api = axios.create({
  baseURL: REST_API,
});

export const login = async (username: string, password: string) => {
  try {
    const response = await api.post('/auth/signin', { usuario:username, password }); // Asegúrese de que la ruta de inicio de sesión coincida con la de su API
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};
