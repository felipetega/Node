'use client'
import React, { useState, useEffect } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const emailParam = params.get('email');
    if (emailParam) {
      setEmail(decodeURIComponent(emailParam));
    }
  }, []);

  const handleLogin = () => {
    // Aqui você pode enviar o e-mail e a senha para o backend para autenticação
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
