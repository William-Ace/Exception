import { Navigate, useLocation } from 'react-router-dom';

import Loader from './style.loader';
import { useContext } from 'react';

import AuthContext from '@/component/context/auth.context';

const AuthRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  return user.validEmail ? (
    <Loader />
  ) : !!user ? (
    <>{children}</>
  ) : (
    <Navigate to={'/'} state={{ from: location }} replace />
  );
};

export default AuthRoute;
