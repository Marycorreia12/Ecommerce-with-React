import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../Button/Button'
import Bike1 from '../../images/bike1.svg'
import Bike2 from '../../images/bike2.svg'
import Bike3 from '../../images/bike3.svg'
import styles from './CardsSlide.module.css'

import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const CardsSlide = () => {
  return (
    <section className={styles.wrapper}>
      <div className={`${styles.content} container`}>
        <article className={styles.box}>
          <div className={styles.info}>
            <h3>ACCEESSORIES <br/> & CLOTHING</h3>
            <Button texto = 'VIEW MORE' padding='0.563em 1.063em'/>
          </div>
          <div className={`${styles.image} ${styles.image_1}`}>
            <img src={Bike1} alt="Bike1" />
          </div>
        </article>
        <article className={styles.box}>
          <div className={styles.info}>
            <h3>BICYCLE <br/> & SPARE PARTS</h3>
            <Button texto = 'VIEW MORE' padding='0.563em 1.063em'/>
          </div>
          <div className={styles.image}>
            <img src={Bike2} alt="Bike1" />
          </div>
        </article>
        <article className={styles.box}>
          <div className={styles.info}>
            <h3>MOUNTAIN <br/> & ROAD BIKES</h3>
            <Button texto = 'VIEW MORE' padding='0.563em 1.063em'/>
          </div>
          <div className={styles.image}>
            <img src={Bike3} alt="Bike1" />
          </div>
        </article>
      </div>
      <FontAwesomeIcon icon={faAngleLeft} className={`${styles.faArrow} ${styles.faArrow_left}`}/>
      <FontAwesomeIcon icon={faAngleRight} className={`${styles.faArrow} ${styles.faArrow_right}`}/>
    </section>
  )
}

export default CardsSlide
