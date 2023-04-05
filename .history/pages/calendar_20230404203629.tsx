import { useContext } from 'react';
import AuthContext from '../context/auth.context';
import AuthRoute from '../components/auth/auth.route';

export default function Calendar() {
  const { user } = useContext(AuthContext);
  return (
    <AuthRoute>
      <h1> {JSON.stringify(user)} </h1>
    </AuthRoute>
  );
}
