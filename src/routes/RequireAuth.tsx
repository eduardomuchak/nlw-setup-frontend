import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';

export const RequireAuth = () => {
  const location = useLocation();

  const token = sessionStorage.getItem('@User');

  if (!token) {
    toast.error('Seu código de acesso expirou, faça login novamente');
  }

  return token ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace />;
};
