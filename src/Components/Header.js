import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <img alt="" src="assets/techlogo.png" />
      </div>
      <div className='header__right'>
        <p>Home</p>
        <p>Events</p>
        <p>Register</p>
        <p>About Gce</p>
        <p>memories</p>
        <p>Contact</p>
      </div>
    </div>
  )
}

export default Header