import React from 'react'
import Button from '../Button/Button'
import NewsCard from '../NewsCard/NewsCard'
import SubTitle from '../SubTitle/SubTitle'

const OurNews = () => {
  return (
    <div className="container">
          <div className="flex-column">
            <SubTitle texto='OUR NEWS' textAline='center'/>
            <NewsCard/>
            <Button texto='VIEW MORE' padding='0.813em 1.563em' className='btn'/>
          </div> 
        </div> 
  )
}

export default OurNews
