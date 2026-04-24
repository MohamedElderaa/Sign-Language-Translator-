import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userlogin, setUserlogin] = useState(null);

  return (
    <AuthContext.Provider value={{ userlogin, setUserlogin }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
