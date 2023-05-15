import { useEffect } from 'react';
import { useAuthStore } from '../store/auth';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/auth';

export const useAuth = () => {
  const token = useAuthStore((state) => state.token);
  const setToken = useAuthStore((state) => state.setToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
        // navigate('/scanner');
        // setToken(null);
    }
  }, [token, history]);

  const signIn = async (username: string, password: string) => {
    navigate('/scanner');
    const data = await login(username, password);
    setToken(data.access_token);
  };

  const signOut = () => {
    setToken(null);
  };


  return { token, signIn, signOut };
};
