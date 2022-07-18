import React from 'react'
import styles from './AboutCount.module.css'

const AboutCount = () => {
  return (
    <section className={styles.wrapper}>
        <div className="container">
            <div className={styles.content_container}>
                <div className={styles.content}>
                    <strong className={styles.title}>2200</strong>
                    <h5 className={styles.subTitle}>Satisfied customers</h5>
                    <p className={styles.text}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                </div>
                <div className={styles.content}>
                    <strong className={styles.title}>1650</strong>
                    <h5 className={styles.subTitle}>Various Products</h5>
                    <p className={styles.text}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                </div>
                <div className={styles.content}>
                    <strong className={styles.title}>125</strong>
                    <h5 className={styles.subTitle}>Famous brand</h5>
                    <p className={styles.text}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                </div>
                <div className={styles.content}>
                    <strong className={styles.title}>1988</strong>
                    <h5 className={styles.subTitle}>Orders per year</h5>
                    <p className={styles.text}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutCount
