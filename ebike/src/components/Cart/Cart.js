import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Cart.module.css'

const Cart = () => {
  return (
    <div className='container'>
      <h4 className={styles.title}>Shopping Cart</h4>
      <div className={styles.wrapper}>
        <p className={styles.subtitle}>Your Shopping Cart is Empty</p>
        <small>Nothin' to see here.</small>
        <small>Check out your wishlist items.</small>
        <Link to="/wishlist" className={styles.btn}>View Wishlist Items</Link>
      </div>
    </div>
  )
}

export default Cart
