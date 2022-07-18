import React from 'react'
import './header2.css'
import { Link } from 'react-router-dom'
import {ReactComponent as Iconic} from '../../images/Iconic-ebikes.svg';
import Navbar from '../Navbar/Navbar';

const Header2 = () => {
  return (
    <section className='header2'>
        <Link to='/' className='iconic'>
          <Iconic />
        </Link>
        <Navbar />
    </section>
  )
}

export default Header2
