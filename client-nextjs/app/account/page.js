'use client'
import React, { useState } from 'react';

const Account = () => {
  const [emailExists, setEmailExists] = useState(false);

  const checkEmailExists = async (email) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_AUTH}/${email}`);
      const data = await response.json();
      if (data.email === email) {
        return true;
      }
      return false;
    } catch (error) {
      console.error('Erro ao verificar o e-mail:', error);
      return false;
    }
  }
  

  const handleContinue = async () => {
    const email = document.getElementById('emailInput').value;
    const exists = await checkEmailExists(email);
  
    if (exists) {
      window.location.href = `/account/login?email=${encodeURIComponent(email)}`;
    } else {
      window.location.href = '/account/register';
    }
  
    setEmailExists(exists);
  };

  return (
    <>
      <p>Insira seu e-mail para se inscrever ou entrar.</p>
      <input type="text" placeholder="E-mail" className="input input-bordered w-full max-w-xs" id="emailInput" />
      <p>Ao continuar, afirmo que concordo com a Política de privacidade e os Termos de uso da Nike.</p>

      <button className="btn" onClick={handleContinue}>Continuar</button>
    </>
  )
}

export default Account;
