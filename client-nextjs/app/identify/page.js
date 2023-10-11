'use client'
import React, { useState } from 'react';

const Identify = () => {
  const [name, setName] = useState('');
  const [cpf, setCPF] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [selectedDelivery, setSelectedDelivery] = useState('');

  const handleContinue = () => {
    if (name && cpf && email && address && selectedDelivery) {
      window.location.href = '/payment';
    } else {
      alert('Por favor, preencha todos os campos e selecione a forma de entrega antes de continuar.');
    }
  };
  return (
    <div>
      <h2>Identificação</h2>

      {/* Campo de Nome */}
      <label>
        Nome
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      {/* Campo de CPF */}
      <label>
        CPF
        <input
          type="text"
          value={cpf}
          onChange={(e) => setCPF(e.target.value)}
        />
      </label>

      {/* Campo de E-mail */}
      <label>
        E-mail
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      {/* Campo de Endereço */}
      <label>
        Endereço de entrega
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>

      <h2>Entrega 1 de 1</h2>
      <p>Selecione a entrega</p>
      <label>
        <input 
          type="radio" 
          name="delivery" 
          value="normal" 
          onChange={(e) => setSelectedDelivery(e.target.value)} 
        />
        Normal - 7 dias úteis (Frete Grátis)
      </label>

      <button onClick={handleContinue}>Continuar</button>
    </div>
  );
};

export default Identify;
