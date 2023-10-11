'use client'

import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from './AuthContext';
import Image from 'next/image'

const Navbar2 = () => {
  const { userEmail, userName, logout, token } = useAuth();

  return (
    <nav className="navbar border-b-2 border-primary mb-8 justify-between text-lg font-medium">
      <ul className="menu menu-horizontal">
        <Image
          src={`/logo.svg`}
          alt='logo'
          width={30}
          height={30}
        />
      </ul>

      <ul className="menu menu-horizontal">
        <li>Lançamentos</li>
        <li>Masculino</li>
        <li>Feminino</li>
        <li>Dia das Crianças</li>
        <li>Ofertas</li>
        <li>SNKRS</li>
      </ul>



      <ul className="menu menu-horizontal">
        <li>barra de busca</li>
        <li>emote coração</li>
        <li>carrinho</li>
      </ul>
    </nav>
  );
};

export default Navbar2;
