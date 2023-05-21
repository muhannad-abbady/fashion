import { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthContext';

const ProtectedRoutes = ({redirectTo}) => {
  const [token, setToken] = useContext(AuthContext);
  const location = useLocation();

  return token 
    ? <Outlet />
    : <Navigate to={redirectTo} replace state={{ from: location }}/>;
}

export default ProtectedRoutes