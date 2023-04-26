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
        navigate('/scanner');
    }
  }, [token, history]);

  const signIn = async (username: string, password: string) => {
    const data = await login(username, password);
    setToken(data.token);
  };

  return { token, signIn };
};
