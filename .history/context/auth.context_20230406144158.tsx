import { createContext } from 'react';

type authContextType = {
  user: Object;
  setUser: (a: any) => void;
};

const authContextDefaultValues: authContextType = {
  user: {},
  setUser: () => {},
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export default AuthContext;
