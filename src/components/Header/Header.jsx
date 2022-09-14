import React from 'react'
import '../Header/Header.css'
import Particlests from '../tsParticles'
import { Button } from '@mui/material'

const Header = () => {
  return (
    <div className='header' id='headerId'>
        <div className='left'>
          <h4>Let's,</h4>
          <div className='left-down'>
            <span className='discuss'>Discuss</span>
            <span className='learn'>Learn <span className='and'>&</span></span>
            <span className='code'>Code</span>
          </div>
        </div>
        <div className='right'>
          <Button variant="outlined" href='https://www.pescemandya.org/' target='_blank'>
            <h3>PESCE</h3>
          </Button>
        </div>
        <div className='bottom'>
          <p>(Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos officiis corrupti, eveniet quo cupiditate vel labore provident maiores)</p>
        </div>
        <Particlests id="tsparticles" />
    </div>
  )
}

export default Header