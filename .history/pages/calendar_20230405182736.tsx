import { useContext } from 'react';
import AuthContext from '../context/auth.context';

export default function Calendar() {
  const { user } = useContext(AuthContext);
  console.log(user);
  return <h1> {JSON.stringify(user)} </h1>;
}
