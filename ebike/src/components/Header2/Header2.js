import React from 'react'
import './header2.css'
import { Link } from 'react-router-dom'
import {ReactComponent as Iconic} from '../../images/Iconic-ebikes.svg';
import Navbar from '../Navbar/Navbar';

const Header2 = () => {
  return (
    <div className='header2'>
        <Link to='/' className='iconic'>
          <Iconic />
        </Link>
        <Navbar />
    </div>
  )
}

export default Header2
