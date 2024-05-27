import React from 'react'
import './Navbar.css'
import logo_image from '../Assets/logo.png.jpeg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src={logo_image} alt="" />
      </div>
      <div className="navbar-menu">
        <ul>
            <li>Home</li>
            <li>About Us </li>
            <li>Destinations</li>
            <li>Blog</li>
            <li>Contact Us</li>
            <li>Packages</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
