import React from 'react'
import styles from './Header2.module.css'
import { Link } from 'react-router-dom'
import {ReactComponent as Iconic} from '../../images/Iconic-ebikes.svg';
import Navbar from '../Navbar/Navbar';

const Header2 = () => {
  return (
    <section className={styles.wrapper}>
        <Link to='/' className={styles.iconic_image}>
          <Iconic />
        </Link>
        <Navbar />
    </section>
  )
}

export default Header2
