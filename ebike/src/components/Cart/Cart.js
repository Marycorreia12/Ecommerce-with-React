import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <div>
      Your Shopping Cart is Empty
      <Link to="/wishlist">WishList</Link>
    </div>
  )
}

export default Cart
