import React from 'react'
import '../Navigation/NavBar.css'
import { Link } from 'react-scroll'

const NavBar = () => {
  return (
    <nav className='nav'>
      <ul className='nav-links'>
        <li>
          <Link className="links" to="header" smooth={true} duration={1000}>Home</Link>
        </li>
        <li>
          <Link className="links" to="contact" smooth={true} duration={1000}>Contact</Link>
        </li>
        <li>
          <Link className="links" to="about" smooth={true} duration={1000}>About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar