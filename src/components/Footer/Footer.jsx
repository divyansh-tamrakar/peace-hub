import React from 'react'
import '../Footer/Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <aside>
          <div className='logo-1'>
            <div className="logo-2">
              <img src="#" alt="#"/>
            </div>
          </div>
        </aside>
        <main>
          <div className='footer-1'>
            <p>Backend Developer: Divyansh Tamrakar</p>
            <p>Frontend Developer: Nishant Nayan & Adarsh Singh</p>
            <p>Copyright ©️ 2022 Campus Connect</p>
          </div>
        </main>
    </footer>
  )
}

export default Footer