import React from 'react'
import styles from './AdvantagesImages.module.css'

const AdvantagesImages = ({img, title, subTitle}) => {
  return (
    <div className={styles.content}>
        <img src={img} alt="AdvantageImage" />
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.subtitle}>{subTitle}</p>
    </div>
  )
}

export default AdvantagesImages
