import React from 'react'
import Advantages from '../../components/Advantages/Advantages'
import CardsSlide from '../../components/CardsSlide/CardsSlide'
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle'
import ContactForm from '../../components/ContactForm/ContactForm'
import Customer from '../../components/CustumerFeedback/Customer'
import SubTitle from '../../components/SubTitle/SubTitle'
import Product from '../../components/Products/Product'
import styles from './Services.module.css'
import Head from '../../components/Head/Head'

const Services = () => {
  const carossel = React.useRef(null);

  return (
    <>
     <Head title="Service" description="Essa é a descrição da Service" />
      <HeaderTitle texto = 'SERVICES'/>
      <CardsSlide/>
      <Advantages/>
      <section className={styles.wrapper}>
        <div className="container">
            <SubTitle texto='NEW PRODUCTS'/>
            <div className={styles.content}>
               <Product background='none' contentRef={carossel}/>
               <Product background='none' contentRef={carossel}/>
               <Product background='none' contentRef={carossel}/>
               <Product background='none' contentRef={carossel}/>
            </div>
        </div>
      </section> 
      <Customer/>
      <section className='container'>
        <ContactForm/>
      </section>
    </>
  )
}

export default Services
