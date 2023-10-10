'use client'
// components/Navbar.js

import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from './AuthContext';

const Navbar = () => {
  const { userEmail, userName } = useAuth();
  const isLoggedIn = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      window.location.reload();
    }
  };

  return (
    <nav className="navbar border-b-2 border-primary mb-8 justify-between text-lg font-medium">
      <ul className="menu menu-horizontal">
        <li><Link href={"/"}>E-COMMERCE</Link></li>
      </ul>

      <ul className="menu menu-horizontal">
        <li><Link href={"/products"}>PRODUTOS</Link></li>
      </ul>

      <ul className="menu menu-horizontal">
        {isLoggedIn ? (
          <>
            <li>
              <Link href={"/profile"}>
                <FontAwesomeIcon icon={faUser} />
                {userName}
              </Link>
            </li>
            <li>{userEmail}</li>
            <li>
              <button onClick={handleLogout}>Deslogar</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href={"/account"}>Entrar</Link>
            </li>
            <li>
              <Link href={"/"}>REGISTER</Link>
            </li>
          </>
        )}
        <li><Link href={"/cart"}>CART</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
