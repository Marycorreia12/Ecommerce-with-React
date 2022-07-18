import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Button from '../Button/Button'
import Select from '../Select/Select'
import './homeSearch.css'

const HomeSearch = () => {
const [select, setSelect] = React.useState('');

  return (
      <section className='container'>
        <div className='home-search-container' >
          <div className="home-search-contents">
          <strong className='home-search-title'>FIND THE BIKE</strong>
          <div className='home-search'>
            <div className='home-search-items-container'>
              <label htmlFor="value1">Type</label>
              <div className='home-search-items'>
                <Select options={['Mountain bike', 'Road bike', 'City bike', 'Kids bike']} value={select} setValue={setSelect}/>
                <FontAwesomeIcon icon={faAngleDown} className='arrow-icons'/>
               </div>
            </div>
            <div className='home-search-items-container'>
              <label htmlFor="value2">Wheel Size</label>
              <div className='home-search-items'>
              <Select options={['20', '24', '27', '30']} value={select} setValue={setSelect}/>
              <FontAwesomeIcon icon={faAngleDown} className='arrow-icons'/>
              </div>
            </div>
            <div className='home-search-items-container'>
              <label htmlFor="value3">Brand</label>
              <div className='home-search-items'>
              <Select options={['Mountain', 'Pinarello']} value={select} setValue={setSelect}/>
              <FontAwesomeIcon icon={faAngleDown} className='arrow-icons'/>
              </div>
            </div>
            <div className='home-search-items-container'>
              <label htmlFor="value4" id='label-btn'>button</label>
              <Button id='value4' texto='Search' padding='1em 5.2em'/>
            </div>
          </div>
          </div>
        </div>
      </section>
  )
}

export default HomeSearch
