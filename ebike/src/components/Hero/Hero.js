import React from 'react'
import Button from '../Button/Button'
import Background from '../../images/home-background.svg'
import './hero.css'

const Hero = () => {
  return (
    <section>
      <div className='home-title-container'>
        <h1 className='home-title'>BEST BIKES FOR YOU</h1>
        <p className='home-subtitle'>Lorem ipsum dolor sit amet,consectetur adipiscing elit,Labore
        consectetur sint iure id expedita saepe.</p>
        <Button texto='BUY NOW' padding='.8em 1.5em' margin= '1.56em auto 1.875em auto'/>
      </div>
      <div className='hero-container'>
        <img src={Background} alt="Background Home" />
      </div>
    </section>
  )
}

export default Hero;
