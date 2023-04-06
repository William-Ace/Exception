import { useContext } from 'react';
import AuthContext from '@/component/context/auth.context';
import { useRouter } from 'next/router';

const AuthRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const from = router.pathname || '/login';

  return user.emailVerified ? (
    <> </>
  ) : !!user ? (
    <Navigate to={from} state={{ from: location }} replace />
  ) : (
    <>{children}</>
  );
};

export default AuthRoute;