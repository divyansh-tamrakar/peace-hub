import React from 'react'
import '../Navigation/NavBar.css'
import { Link } from 'react-scroll'

const NavBar = () => {
  return (
    <nav className='nav'>
      <ul className='nav-links'>
        <li>
          <Link className="links" to="headerId" smooth={true} duration={1000}>Home</Link>
        </li>
        <li>
          <Link className="links" to="postId" smooth={true} duration={1000}>Posts</Link>
        </li>
        <li>
          <Link className="links" to="contactId" smooth={true} duration={1000}>Contact</Link>
        </li>
        <li>
          <Link className="links" to="aboutId" smooth={true} duration={1000}>About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar