import React from 'react'
import styles from './Header1.module.css'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faEnvelope, faHeart, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'

const Header1 = () => {
  return (
    <section className={styles.wrapper}>
        <div className={styles.content_left}>
          <NavLink to="" className={styles.content_left_link}>
              <FontAwesomeIcon icon={faPhone} color="#8DC63F" className={styles.content_left_icons}/>+9123 456 87
          </NavLink>
          <NavLink to="" className={styles.content_left_link}>
              <FontAwesomeIcon icon={faEnvelope} color="#8DC63F" className={styles.content_left_icons}/>iconicebikes@gmail.com
          </NavLink>
        </div>
        <ul className={styles.content_right}>
          <li><NavLink to="/login"><FontAwesomeIcon icon={faUser}/></NavLink></li>
          <li><NavLink to="/wishlist"><FontAwesomeIcon icon={faHeart}/></NavLink></li>
          <li><NavLink to="/cart"><FontAwesomeIcon icon={faCartShopping}/></NavLink></li>
        </ul>     
    </section>
  )
}

export default Header1
