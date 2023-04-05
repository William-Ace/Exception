import { useContext } from 'react';
import AuthContext from '../context/auth.context';

export default function Calendar() {
  const { user } = useContext(AuthContext);
  return <h1> Hello World! </h1>;
}
