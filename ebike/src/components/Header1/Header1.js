import React from 'react'
import './header1.css'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faEnvelope, faHeart, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'

const Header1 = () => {
  return (
    <section className='header1'>
        <div className='header1-contact'>
          <NavLink to="/" className='header1-contact-link'>
              <FontAwesomeIcon icon={faPhone} color="#8DC63F" className='icon'/>+9123 456 87
          </NavLink>
          <NavLink to="/contact" className='header1-contact-link'>
              <FontAwesomeIcon icon={faEnvelope} color="#8DC63F" className='icon'/>iconicebikes@gmail..com
          </NavLink>
        </div>
        <ul className='header1-icons'>
          <li><a href="/"><FontAwesomeIcon icon={faUser}/></a></li>
          <li><a href="/"><FontAwesomeIcon icon={faHeart}/></a></li>
          <li><a href="/"><FontAwesomeIcon icon={faCartShopping}/></a></li>
        </ul>     
    </section>
  )
}

export default Header1
