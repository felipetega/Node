'use client'

import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from './AuthContext';
import Image from 'next/image'

const Navbar = () => {
  const { userEmail, userName, logout, token } = useAuth();

  return (
    <nav className="flex items-center p-2 h-10 w-full justify-between text-lg font-medium bg-gray-200">
      <ul className="menu menu-horizontal">
        <Image
          src={`/jordan.svg`}
          alt='jordan'
          width={30}
          height={30}
        />
        <Image
          src={`/snkrs.svg`}
          alt='snkrs'
          width={30}
          height={30}
        />
        <li><Link href={"/products"}>PRODUTOS</Link></li>
      </ul>


      <ul className="menu menu-horizontal">
        {token ? (
          <>
            <li>
              <Link href={"/help"}>Ajuda</Link>
            </li>
            <li>
              <Link href={"/join"}>Junte-se a nós</Link>
            </li>

            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn bg-gray-200">Olá, {userName} <FontAwesomeIcon icon={faUser} /></label>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Minha conta</a></li>
                <li><a>Meus pedidos</a></li>
                <li><a>Meus favoritos</a></li>
                <li onClick={logout}><a>Deslogar</a></li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <li>
              <Link href={"/account"}>Entrar</Link>
            </li>
          </>
        )}

      </ul>
    </nav>
  );
};

export default Navbar;
