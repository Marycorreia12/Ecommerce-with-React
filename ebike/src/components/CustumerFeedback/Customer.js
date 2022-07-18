import React from 'react'
import CustomerCard from '../CustomerCard/CustomerCard'
import SubTitle from '../SubTitle/SubTitle'
import styles from './Customer.module.css'

const Customer = () => {
  return (
    <section className={styles.wrapper}>
        <div className='container'>
          <div className={styles.content}>
            <SubTitle texto='CUSTOMER FEEDBACK' cor='#fff'/>
            <CustomerCard/>
            <div className={styles.slide_container}>
                <span className={styles.slide}></span>
                <span className={styles.slide}></span>
                <span className={styles.slide}></span>
                <span className={styles.slide}></span>
            </div>
          </div>
           
        </div>
    </section>
  )
}

export default Customer
