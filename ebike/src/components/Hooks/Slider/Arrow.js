import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import styles from './Arrow.module.css'

const Arrow = () => {
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
    <div>
        <FontAwesomeIcon onClick={slidePrev} icon={faAngleLeft} className={`${styles.faArrow} ${styles.faArrow_left}`}/>
        <FontAwesomeIcon onClick={slideNext}  icon={faAngleRight} className={`${styles.faArrow} ${styles.faArrow_right}`}/>
    </div>
  )
}

export default Arrow
