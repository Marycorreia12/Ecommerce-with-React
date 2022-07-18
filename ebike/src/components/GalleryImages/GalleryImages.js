import React from 'react'
import Photo1 from '../../images/gallery1.svg'
import Photo2 from '../../images/gallery2.svg'
import Photo3 from '../../images/gallery3.svg'
import Photo4 from '../../images/gallery4.svg'
import Photo5 from '../../images/gallery5.svg'
import Photo6 from '../../images/gallery6.svg'
import Photo7 from '../../images/gallery7.svg'
import Photo8 from '../../images/gallery8.svg'
import styles from './GalleryImages.module.css'


const GalleryImages = () => {
  return (
    <section className='container'>
      <div className={styles.wrapper}>
        <div className={styles.items}>
              <img src={Photo1} alt="Photo1"/>
              <div className={styles.info}>
                <h1 className={styles.title}>Photo #1</h1>
                <p className={styles.subtitle}>Satisfied Customers</p>
              </div>
        </div>
        <div className={styles.items}> 
            <img src={Photo2} alt="Photo2"/>
            <div className={styles.info}>
              <h1 className={styles.title}>Photo #2</h1>
              <p className={styles.subtitle}>Satisfied Customers</p>
            </div>
        </div>
        <div className={styles.items}>
            <img src={Photo3} alt="Photo3" className='gallery-images'/>
            <div className={styles.info}>
              <h1 className={styles.title}>Photo #3</h1>
              <p className={styles.subtitle}>Satisfied Customers</p>
            </div>
        </div>
        <div className={styles.items}>
            <img src={Photo4} alt="Photo4" className='gallery-images'/>
            <div className={styles.info}>
              <h1 className={styles.title}>Photo #4</h1>
              <p className={styles.subtitle}>Satisfied Customers</p>
            </div>
        </div>
        <div className={styles.items}> 
            <img src={Photo5} alt="Photo5" className='gallery-images'/>
            <div className={styles.info}>
              <h1 className={styles.title}>Photo #5</h1>
              <p className={styles.subtitle}>Satisfied Customers</p>
            </div>
        </div>
        <div className={styles.items}>
            <img src={Photo6} alt="Photo6" className='gallery-images'/>
            <div className={styles.info}>
              <h1 className={styles.title}>Photo #6</h1>
              <p className={styles.subtitle}>Satisfied Customers</p>
            </div>
        </div>
        <div className={styles.items}> 
            <img src={Photo7} alt="Photo7" className='gallery-images'/>
            <div className={styles.info}>
              <h1 className={styles.title}>Photo #7</h1>
              <p className={styles.subtitle}>Satisfied Customers</p>
            </div>
        </div>
        <div className={styles.items}>
            <img src={Photo8} alt="Photo8" className='gallery-images'/>
            <div className={styles.info}>
              <h1 className={styles.title}>Photo #8</h1>
              <p className={styles.subtitle}>Satisfied Customers</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default GalleryImages
