import React from 'react'
import Background from '../../images/home-background.svg'
import './homeBackground.css'

const HomeBackground = () => {
  return (
    <section className='hero-container'>
        <img src={Background} alt="Background Home" />
    </section>
  )
}

export default HomeBackground;
