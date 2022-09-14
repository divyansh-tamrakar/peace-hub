import React from 'react'
import '../Header/Header.css'
import Particlests from '../tsParticles'

const Header = () => {
  return (
    <div className='header' id='headerId'>
        <h1>Header</h1>
        <Particlests id="tsparticles" />
    </div>
  )
}

export default Header