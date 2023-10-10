'use client'
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState(
    typeof window !== 'undefined' ? localStorage.getItem('email') || null : null
  );
  const [userName, setUserName] = useState(
    typeof window !== 'undefined' ? localStorage.getItem('username') || null : null
  );
  const [token, setToken] = useState(
    typeof window !== 'undefined' ? localStorage.getItem('token') || null : null
  );

  const login = (newToken) => {
    setToken(newToken);
    localStorage.setItem('token', newToken);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ userEmail, setUserEmail, userName, setUserName, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
