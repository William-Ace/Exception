import { useContext } from 'react';
import AuthContext from '@/component/context/auth.context';
import { useRouter } from 'next/router';
import Link from 'next/link';

const AuthRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useContext(AuthContext);

  console.log(user)''

  return user.emailVerified ? (
    <> {children} </>
  ) : (
    <Link href='/login' replace />
  );
};

export default AuthRoute;
