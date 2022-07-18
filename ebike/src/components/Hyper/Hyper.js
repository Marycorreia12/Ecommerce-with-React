import React from 'react'
import HyperGallery from '../HyperGallery/HyperGallery'
import SubTitle from '../SubTitle/SubTitle'
import styles from './Hyper.module.css'

const Hyper = () => {
  return (
    <>
    <section className={styles.background}>
        <div className={styles.hyper_container}>
            <SubTitle texto='HYPER E-RIDE BIKE 700C' 
            textAline='center' cor='#fff'/>
            <p className={styles.text}>Maecenas consequat ex id lobortis venenatis. Mauris id erat enim.
            Morbi dolor dolor, auctor tincidunt lorem.</p>
            <div className={styles.price}>
                <strong>$1.399</strong>
                <small>$1.699</small>
            </div>
            <div className={styles.promotions_container}>
                <div className={styles.promotions_items}>
                    <strong>14</strong>
                    <small>Days</small>
                </div>
                <div className={styles.promotions_items}>
                    <strong>17</strong>
                    <small>HOURS</small>
                </div>
                <div className={styles.promotions_items}>
                    <strong>53</strong>
                    <small>MINUTES</small>
                </div>
                <div className={styles.promotions_items}>
                    <strong>43</strong>
                    <small>SECONDS</small>
                </div>
            </div>
        </div>
    </section>
    <HyperGallery/>
    </>
  )
}

export default Hyper
