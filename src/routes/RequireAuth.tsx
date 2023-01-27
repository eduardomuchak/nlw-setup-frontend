import { useLocation, Navigate, Outlet } from 'react-router-dom';

export const RequireAuth = () => {
  const location = useLocation();

  const token = sessionStorage.getItem('@User');

  console.log('token', token);

  return token ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace />;
};
