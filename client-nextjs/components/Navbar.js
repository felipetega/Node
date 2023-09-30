import React from 'react'
import Link from "next/link";

const Navbar = () => {

  return (
    <nav className="navbar border-b-2 border-primary mb-8 justify-between text-lg font-medium">

<ul className="menu menu-horizontal px-1">
  <li><Link href={"/"}>Principal</Link></li>
  <li><Link href={"/"}>Projetos</Link></li>
</ul>

  <Menu/>

</nav>
  )
}

export default Navbar