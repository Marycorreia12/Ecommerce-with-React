import React from 'react'
import Product from '../Products/Product'
import SubTitle from '../SubTitle/SubTitle'
import styles from './NewProducts.module.css'

const NewProducts = () => {
  return (
        <div className={styles.wrapper}>
          <div className='container'>
            <SubTitle texto='NEW PRODUCTS'/>
            <div className={styles.content}>
                <Product background='none'/>
                <Product background='none'/>
                <Product background='none'/>
                <Product background='none'/>
            </div>
          </div>    
      </div>
  )
}

export default NewProducts
