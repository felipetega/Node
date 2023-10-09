'use client'
// components/Login.js

import React, { useState, useEffect } from 'react';
import { useAuth } from '../../../components/AuthContext';

const Login = () => {
  const { setUserEmail, setUserName } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const emailParam = params.get('email');
    if (emailParam) {
      setEmail(decodeURIComponent(emailParam));
    }
  }, []);

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setUserEmail(email);
        setUserName(data.user.username);
        localStorage.setItem('token', data.token);
        localStorage.setItem('email', email);
        localStorage.setItem('username', data.user.username);
        window.location.href = '/';
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <>
      <p>Bem-vindo de volta!</p>
      <p>Você está logado como: {email}</p>
      <input
        type="password"
        placeholder="Senha"
        className="input input-bordered w-full max-w-xs"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="btn" onClick={handleLogin}>
        Entrar
      </button>
    </>
  );
};

export default Login;
