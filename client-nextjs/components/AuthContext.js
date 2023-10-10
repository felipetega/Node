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
  return (
    <AuthContext.Provider value={{ userEmail, setUserEmail, userName, setUserName }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
