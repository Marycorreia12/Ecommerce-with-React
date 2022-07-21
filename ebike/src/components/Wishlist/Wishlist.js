import React from 'react'
import styles from './Wishlist.module.css'
import { Link } from 'react-router-dom'

const Wishlist = () => {
  return (
    <div className='container'>
      <div className={styles.wrapper}>
      <p className={styles.info}>Your Wishlist will be saved for up to 30 days. <Link to="/login" className={styles.link}>Sign In or </Link><Link to="/login/create" className={styles.link}>Register</Link> to make sure your saved products do not disappear!</p>
      <h4 className={styles.title}>WISHLIST</h4>
      <p className={styles.info}>You have no items in your wishlist</p>
      </div>
    </div>
  )
}

export default Wishlist
