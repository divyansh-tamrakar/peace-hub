import React from 'react'
import '../Navigation/NavBar.css'
import { Link } from 'react-scroll'
import Button from '@mui/material/Button'

const NavBar = () => {
  return (
    <div className='parent'>
      <header className='name'>
        <h3>Nishant</h3>
      </header>
      <nav className='nav'>
        <ul className='nav-links'>
          <li>
            <Link className="links" to="headerId" smooth={true} duration={1000}>Home</Link>
          </li>
          <li>
            <Link className="links" to="aboutId" smooth={true} duration={1000}>About</Link>
          </li>
          <li>
            <Link className="links" to="contactId" smooth={true} duration={1000}>Contact Us</Link>
          </li>
        </ul>
      </nav>
      <div className='signup'>
        <Button variant="text" sx={{color:'#BC6FF1'}}>Sign Up</Button>
      </div>
    </div>
  )
}

export default NavBar