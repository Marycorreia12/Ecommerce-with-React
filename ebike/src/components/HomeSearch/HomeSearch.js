import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Button from '../Button/Button'
import Select from '../Select/Select'
import styles from './HomeSearch.module.css'

const HomeSearch = () => {
const [select, setSelect] = React.useState('');

  return (
      <section className='container'>
        <div className={styles.search_container}>
          <div className={styles.search_contents}>
          <strong className={styles.search_title}>FIND THE BIKE</strong>
          <div className={styles.search_select_container}>
            <div className={styles.search_items_container}>
              <label htmlFor="value1">Type</label>
              <div className={styles.search_item}>
                <Select options={['Mountain bike', 'Road bike', 'City bike', 'Kids bike']} value={select} setValue={setSelect}/>
                <FontAwesomeIcon icon={faAngleDown} className={styles.arrow_icons}/>
               </div>
            </div>
            <div className={styles.search_items_container}>
              <label htmlFor="value2">Wheel Size</label>
              <div className={styles.search_item}>
              <Select options={['20', '24', '27', '30']} value={select} setValue={setSelect}/>
              <FontAwesomeIcon icon={faAngleDown} className={styles.arrow_icons}/>
              </div>
            </div>
            <div className={styles.search_items_container}>
              <label htmlFor="value3">Brand</label>
              <div className={styles.search_item}>
              <Select options={['Mountain', 'Pinarello']} value={select} setValue={setSelect}/>
              <FontAwesomeIcon icon={faAngleDown} className={styles.arrow_icons}/>
              </div>
            </div>
            <div className={styles.search_items_container}>
              <label htmlFor="value4" className={styles.label_btn}>button</label>
              <Button id='value4' texto='Search' padding='1em 5.2em'/>
            </div>
          </div>
          </div>
        </div>
      </section>
  )
}

export default HomeSearch
