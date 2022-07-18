import React from 'react'
import Advantages from '../Advantages/Advantages'
import CardsSlide from '../CardsSlide/CardsSlide'
import Sponsorship from '../../components/Sponsorships/Sponsorship'
import './homeBackground.css'
import Subscribe from '../Subscribe/Subscribe'
import Customer from '../CustumerFeedback/Customer'
import Hyper from '../Hyper/Hyper'
import TopSale from '../TopSale Products/TopSale'
import OurProducts from '../OurProducts/OurProducts'
import OurNews from '../OurNews/OurNews'

const HomeBackground = () => {
 
  return (
    <section className='home-bg'>
        <CardsSlide/>
        <Advantages/>
        <OurProducts/>
        <Subscribe/>
        <TopSale/>
        <Customer/>
        <OurNews/>
        <Sponsorship/>
        <Hyper/>
    </section>
  )
}

export default HomeBackground
