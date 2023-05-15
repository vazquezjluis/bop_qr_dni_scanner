import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Reemplace con la URL base de su API
});

export const login = async (username: string, password: string) => {
  try {
    const response = await api.post('/auth/signin', { usuario:username, password }); // Asegúrese de que la ruta de inicio de sesión coincida con la de su API
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};
