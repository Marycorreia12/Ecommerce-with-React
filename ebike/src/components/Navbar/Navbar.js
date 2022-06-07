import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <ul className='nav'>
        <li className='nav-items'>
        <Link to="/">Home</Link>
        </li>
        <li className='nav-items'>
        <Link to="/about">About</Link>
        </li>
        <li className='nav-items'>
        <Link to="/services">Services</Link>
        </li>
        <li className='nav-items'>
        <Link to="/shops">Shops</Link>
        </li>
        <li className='nav-items'>
        <Link to="/gallery">Gallery</Link>
        </li>
        <li className='nav-items'>
        <Link to="/news">News</Link>
        </li>
        <li className='nav-items'>
        <Link to="/contact">Contact</Link>
        </li>    
    </ul>
  )
}

export default Navbar
