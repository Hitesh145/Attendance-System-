import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import Button from './Button';


function Navbar() {
  const [clicks, setClick] = useState(false);
  const handleClick = () => setClick(!clicks);
  return ( 
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            LOGO
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={clicks ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={clicks ? 'nav-menu active' : 'nav-menu'}>

            <li className='nav-item'>
              <a href='#home' className='nav-links'>Home</a>
            </li>
            <li className='nav-item'>
              <a href='#about' className='nav-links'>About</a>
            </li>
            <li className='nav-item'>
              <a href='#contacts' className='nav-links'>Contact</a>
            </li>
            <li className='nav-item'>
              {/* <Link to='/sign-up' >
              <button className='btn'>Sign up</button>
              </Link> */}
              <Button buttonStyle='btn--outline'>SIGN IN</Button>
            </li>
            {/* <Button buttonStyle='btn--outline'>SIGN UP</Button> */}
          </ul>
        </div>
      </nav>

    </>

  )
}

export default Navbar;