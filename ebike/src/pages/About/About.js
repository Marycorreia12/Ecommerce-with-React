import React from 'react'
import Sponsorship from '../../components/Sponsorships/Sponsorship'
import AdvantagesCards from '../../components/AdvantagesCards/AdvantagesCards'
import SubTitle from '../../components/SubTitle/SubTitle'
import AdvantagesImages from '../../components/AdvantagesImages/AdvantagesImages'
import adv1 from '../../images/advimage1.svg'
import adv2 from '../../images/advimage2.svg'
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle'
import Customer from '../../components/CustumerFeedback/Customer'
import Product from '../../components/Products/Product'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../Services/Services.module.css'
import AboutCount from '../../components/AboutCount/AboutCount'
import Head from '../../components/Head/Head'
import styles from './About.module.css'

const About = () => {
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
     <Head title="About" description="Essa é a descrição da About" />
      <HeaderTitle texto = 'ABOUT US'/> 
      <div className='container'>
        <SubTitle texto = 'OUR ADVANTAGES' textAline=  'center'/>
        <div className={`${styles.advantages_images} animeUp`} >
          <AdvantagesImages img={adv1} title='Doloremque laudantium, totam rem aperiam' subTitle='Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque lauda ntium, totam rem aperiam, eaque.'/>       
          <AdvantagesImages img={adv2} title='At vero eos et accusamus et iusto odio' subTitle='Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque lauda ntium, totam rem aperiam, eaque.'/>
        </div>
        <div className={styles.advantages_cards}>
          <AdvantagesCards cor='#192330'/>
        </div>
      </div>
      <div>
          <AboutCount />
      </div>
      <div className='container'>
        <div className="margin">
          <SubTitle texto='TOP SALE'/>
          <div className="pro-container">
          <Product background='none' contentRef={carossel}/>
          <FontAwesomeIcon onClick={slidePrev} icon={faAngleLeft} className='faArrow faArrow-left'/>
          <FontAwesomeIcon onClick={slideNext}  icon={faAngleRight} className='faArrow faArrow-right'/>
          </div>
        </div>
      </div>
      <Customer/>
      <Sponsorship/>
    </>
  )
}

export default About
