import React from 'react'
import Product from '../Products/Product'
import SubTitle from '../SubTitle/SubTitle'
import styles from './OurProducts.module.css'

const OurProducts = () => {
  return (
    <div className={styles.wrapper}>
          <div className='container'>
            <SubTitle texto='OUR PRODUCTS'/>
            <div className={styles.products_container}>
                <Product discount='12%' />
                <Product discount='12%'/>
                <Product discount='12%'/>
                <Product discount='12%' />
                <Product discount='12%'/>
                <Product discount='12%'/>
                <Product discount='12%'/>
                <Product discount='12%'/>
            </div>
        </div>
        </div>
  )
}

export default OurProducts
