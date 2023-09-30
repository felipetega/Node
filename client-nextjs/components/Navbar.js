import React from 'react'
import Link from "next/link";

const Navbar = () => {
  return (
<nav className="navbar border-b-2 border-primary mb-8 justify-between text-lg font-medium">

<ul className="menu menu-horizontal">
  <li><Link href={"/"}>E-COMMERCE</Link></li>
</ul>

<ul className="menu menu-horizontal">
  <li><Link href={"/"}>SEARCH BAR</Link></li>
</ul>

<ul className="menu menu-horizontal">
  <li><Link href={"/"}>SIGN IN</Link></li>
  <li><Link href={"/"}>REGISTER</Link></li>
  <li><Link href={"/"}>CART</Link></li>
</ul>


</nav>

  )
}

export default Navbar
