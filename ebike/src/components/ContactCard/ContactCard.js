import React from 'react'
import styles from './ContactCard.module.css'

const ContactCard = ({img, title, text1, text2}) => {
  return (
    <article className={styles.content}>
        <div className={styles.content_image}>
            <img src={img} alt="ImageContact" />
            <p>{title}</p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.content_text}>
            <p>{text1}</p>
            <p>{text2}</p>
        </div>
    </article>
  )
}

export default ContactCard
