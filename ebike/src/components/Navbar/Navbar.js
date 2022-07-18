import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return ( 
        <ul className='nav'>
                <li className='nav-items'>
                <NavLink to="/">Home</NavLink>
                </li>
                <li className='nav-items'>
                <NavLink to="/about">About</NavLink>
                </li>
                <li className='nav-items'>
                <NavLink to="/services">Services</NavLink>
                </li>
                <li className='nav-items'>
                <NavLink to="/shops">Shops</NavLink>
                </li>
                <li className='nav-items'>
                <NavLink to="/gallery">Gallery</NavLink>
                </li>
                <li className='nav-items'>
                <NavLink to="/news">News</NavLink>
                </li>
                <li className='nav-items'>
                <NavLink to="/contact">Contact</NavLink>
                </li>    
        </ul>
  )
}

export default Navbar
