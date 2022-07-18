import React from 'react'
import SubTitle from '../SubTitle/SubTitle'
import './subscribe.css'
import SubImage1 from '../../images/subscribe-img.svg'
import EmailSubscribe from '../EmailSubscribe/EmailSubscribe'

const Subscribe = () => {
  return (
    <section className='subscribe-bg'>
        <div className='container'>
          <div className='subscribe-container'>
              <div className='subscribe-input'>
                  <SubTitle texto= 'SUBSCRIBE' cor='#fff'/>
                  <p className='p'>Subscribe us and you won't miss the new
                      arrivals, as well as discounts and sales.</p>
                      <EmailSubscribe/>
              </div>
              <div className='subscribe-image'>
                  <img src={SubImage1} alt="SubscribeImage" />
              </div>
          </div>
        </div>
    </section>
  )
}

export default Subscribe
