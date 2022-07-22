import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  return ( 
        <ul className={styles.nav}>
                <li className={styles.nav_items}>
                <NavLink to="/">Home</NavLink>
                </li>
                <li className={styles.nav_items}>
                <NavLink to="/about">About</NavLink>
                </li>
                <li className={styles.nav_items}>
                <NavLink to="/services">Services</NavLink>
                </li>
                <li className={styles.nav_items}>
                <NavLink to="/shops">Shops</NavLink>
                </li>
                <li className={styles.nav_items}>
                <NavLink to="/gallery">Gallery</NavLink>
                </li>
                <li className={styles.nav_items}>
                <NavLink to="/news">News</NavLink>
                </li>
                <li className={styles.nav_items}>
                <NavLink to="/contact">Contact</NavLink>
                </li>    
        </ul>
  )
}

export default Navbar
