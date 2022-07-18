import React from 'react'
import styles from './AdvantagesCards.module.css'
import ad5 from '../../images/ad5.svg'
import ad6 from '../../images/ad6.svg'
import ad7 from '../../images/ad7.svg'
import ad8 from '../../images/ad8.svg'

const AdvantagesCards = ({texto, cor, img}) => {

  const cards = [
    {
      img: ad5,
      texto: 'Free shipping from $500',
      cor: '#192330',
    }, 

    {
      img: ad6,
      texto: 'Warranty service for 3 months',
      cor: '#192330',
    }, 

    {
      img: ad7,
      texto: 'Exchange and return within 14 days',
      cor: '#192330',
    }, 

    {
      img: ad8,
      texto: 'Discounts for customers',
      cor: '#192330',
    }, 
    
  ]

  return (
    <div className={styles.cards}>
    {cards.map(card => (
      <div className={styles.card}>
            <img src={card.img} alt="AdvantageImage" className={styles.images}/>
            <p style={{color: cor}}>{card.texto}</p>
        </div>

    ))}
    </div>   
  )
}

export default AdvantagesCards
