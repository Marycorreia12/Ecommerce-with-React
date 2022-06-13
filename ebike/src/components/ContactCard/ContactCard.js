import React from 'react'
import './contactCard.css'

const ContactCard = ({img, title, text1, text2}) => {
  return (
    <article className='contact-card'>
        <div className='contact-card-image'>
            <img src={img} alt="ImageContact" />
            <p>{title}</p>
        </div>
        <div className='line'></div>
        <div className='contact-card-text'>
            <p>{text1}</p>
            <p>{text2}</p>
        </div>
    </article>
  )
}

export default ContactCard
