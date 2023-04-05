import { createContext } from 'react';

type authContextType = {
  user: Object;
  signOut: () => void;
};

const authContextDefaultValues: authContextType = {
  user: {},
  signOut: () => {},
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export default AuthContext;
