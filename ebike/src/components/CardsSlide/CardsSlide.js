import React from 'react'
import Button from '../Button/Button'
import Bike1 from '../../images/bike1.svg'
import Bike2 from '../../images/bike2.svg'
import Bike3 from '../../images/bike3.svg'
import styles from './CardsSlide.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const CardsSlide = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
    ]
  };
  return (
   
    <section className={styles.wrapper}>
      <div className="container">
      <Slider {...settings}>
        <article className={styles.box}>
          <div className={styles.box_items}>
            <div className={styles.info}>
              <h3>ACCEESSORIES <br/> & CLOTHING</h3>
              <Button texto = 'VIEW MORE' padding='0.563em 1.063em'/>
            </div>
            <div className={`${styles.image} ${styles.image_1}`}>
              <img src={Bike1} alt="Bike1" />
            </div>
          </div>
        </article>
        <article className={styles.box}>
          <div className={styles.box_items}>
            <div className={styles.info}>
              <h3>BICYCLE <br/> & SPARE PARTS</h3>
              <Button texto = 'VIEW MORE' padding='0.563em 1.063em'/>
            </div>
            <div className={styles.image}>
              <img src={Bike2} alt="Bike1" />
            </div>
          </div>
        </article>
        <article className={styles.box}>
          <div className={styles.box_items}>
            <div className={styles.info}>
              <h3>MOUNTAIN <br/> & ROAD BIKES</h3>
              <Button texto = 'VIEW MORE' padding='0.563em 1.063em'/>
            </div>
            <div className={styles.image}>
              <img src={Bike3} alt="Bike1" />
            </div>
          </div>
        </article>
        <article className={styles.box}>
          <div className={styles.box_items}>
            <div className={styles.info}>
              <h3>ACCEESSORIES <br/> & CLOTHING</h3>
              <Button texto = 'VIEW MORE' padding='0.563em 1.063em'/>
            </div>
            <div className={`${styles.image} ${styles.image_1}`}>
              <img src={Bike1} alt="Bike1" />
            </div>
          </div>
        </article>
        <article className={styles.box}>
          <div className={styles.box_items}>
            <div className={styles.info}>
              <h3>BICYCLE <br/> & SPARE PARTS</h3>
              <Button texto = 'VIEW MORE' padding='0.563em 1.063em'/>
            </div>
            <div className={styles.image}>
              <img src={Bike2} alt="Bike1" />
            </div>
          </div>
        </article>
        <article className={styles.box}>
          <div className={styles.box_items}>
            <div className={styles.info}>
              <h3>MOUNTAIN <br/> & ROAD BIKES</h3>
              <Button texto = 'VIEW MORE' padding='0.563em 1.063em'/>
            </div>
            <div className={styles.image}>
              <img src={Bike3} alt="Bike1" />
            </div>
          </div>
        </article>
        </Slider>
        </div>
    </section>
  )
}

export default CardsSlide
