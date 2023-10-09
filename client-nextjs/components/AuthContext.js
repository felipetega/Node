'use client'
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState(localStorage.getItem('email') || null);
  const [userName, setUserName] = useState(localStorage.getItem('username') || null);

  return (
    <AuthContext.Provider value={{ userEmail, setUserEmail, userName, setUserName }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
