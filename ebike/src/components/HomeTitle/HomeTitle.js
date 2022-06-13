import React from 'react'
import Button from '../Button/Button'
import './homeTitle.css'

const HomeTitle = () => {
  return (
    <div className='home-title-container'>
        <h1 className='home-title'>BEST BIKES FOR YOU</h1>
        <p className='home-subtitle'>Lorem ipsum dolor sit amet,consectetur adipiscing elit,Labore
        consectetur sint iure id expedita saepe.</p>
        <Button texto='BUY NOW' padding='.8em 1.5em'/>
    </div>
  )
}

export default HomeTitle
