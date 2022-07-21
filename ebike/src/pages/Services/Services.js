import React from 'react'
import Advantages from '../../components/Advantages/Advantages'
import CardsSlide from '../../components/CardsSlide/CardsSlide'
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle'
import ContactForm from '../../components/ContactForm/ContactForm'
import Customer from '../../components/CustumerFeedback/Customer'
import Head from '../../components/Head/Head'
import NewProducts from '../../components/New Products/NewProducts'

const Services = ({carossel}) => {
  return (
    <>
     <Head title="Service" description="Essa é a descrição da Service" />
      <HeaderTitle texto = 'SERVICES'/>
      <CardsSlide/>
      <Advantages/>
      <NewProducts/>
      <Customer/>
      <section className='container'>
        <ContactForm/>
      </section>
    </>
  )
}

export default Services
