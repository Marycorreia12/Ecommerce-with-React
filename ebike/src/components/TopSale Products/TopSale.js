import React from 'react'
import Product from '../Products/Product'
import SubTitle from '../SubTitle/SubTitle'
import styles from './TopSale.module.css'

const TopSale = () => {
  const carossel = React.useRef(null);
  return (
        <div className={styles.wrapper}>
            <div className='container'>
                <SubTitle texto='TOP SALE'/>
                <div className={styles.content}>
                    <Product background='none' contentRef={carossel}/>
                    <Product background='none' contentRef={carossel}/>
                    <Product background='none' contentRef={carossel}/>
                    <Product background='none' contentRef={carossel}/>
                </div>
              </div>    
      </div>
  )
}

export default TopSale
