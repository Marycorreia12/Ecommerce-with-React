import React from 'react'
import Advantages from '../../components/Advantages/Advantages'
import CardsSlide from '../../components/CardsSlide/CardsSlide'
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle'
import ContactForm from '../../components/ContactForm/ContactForm'
import Customer from '../../components/CustumerFeedback/Customer'
import SubTitle from '../../components/SubTitle/SubTitle'
import Product from '../../components/Products/Product'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import styles from './Services.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from '../../components/Head/Head'

const Services = () => {
  const carossel = React.useRef(null);

  function slidePrev(e){
    e.preventDefault();
    carossel.current.scrollLeft -=  carossel.current.offsetWidth;
  }

  function slideNext(e){
    e.preventDefault();
    carossel.current.scrollLeft +=  carossel.current.offsetWidth;
  }

  return (
    <>
     <Head title="Service" description="Essa é a descrição da Service" />
      <HeaderTitle texto = 'SERVICES'/>
      <CardsSlide/>
      <Advantages/>
      <section className={styles.wrapper}>
        <div className="container">
            <SubTitle texto='NEW PRODUCTS'/>
            <div className={styles.pro_container}>
               <Product background='none' contentRef={carossel}/>
               <FontAwesomeIcon onClick={slidePrev} icon={faAngleLeft} className={`${styles.faArrow} ${styles.faArrow_left}`}/>
               <FontAwesomeIcon onClick={slideNext}  icon={faAngleRight} className={`${styles.faArrow} ${styles.faArrow_right}`}/>
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
