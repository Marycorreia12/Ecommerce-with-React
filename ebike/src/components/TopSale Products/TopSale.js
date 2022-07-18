import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Product from '../Products/Product'
import SubTitle from '../SubTitle/SubTitle'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import '../../pages/Services/Services.module.css'

const TopSale = () => {
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
        <div className='margin-top'>
            <div className='container'>
                <SubTitle texto='TOP SALE'/>
                <div className="pro-container">
                    <Product background='none' contentRef={carossel}/>
                    <Product background='none' contentRef={carossel}/>
                    <Product background='none' contentRef={carossel}/>
                    <Product background='none' contentRef={carossel}/>
                    <Product background='none' contentRef={carossel}/>
                    <Product background='none' contentRef={carossel}/>
                    <Product background='none' contentRef={carossel}/>
                    <Product background='none' contentRef={carossel}/>
                    <FontAwesomeIcon onClick={slidePrev} icon={faAngleLeft} className='faArrow faArrow-left'/>
                   <FontAwesomeIcon onClick={slideNext}  icon={faAngleRight} className='faArrow faArrow-right'/>
                </div>
            </div>
      </div>
  )
}

export default TopSale
