import React from 'react'
import styles from './Advantages.module.css'
import SubTitle from '../SubTitle/SubTitle'
import AdvantagesCards from '../../components/AdvantagesCards/AdvantagesCards'


const Advantages = () => {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className={styles.content}>
            <SubTitle texto = 'OUR ADVANTAGES' cor='#fff'/>
            <AdvantagesCards cor='#fff'/>
        </div>

      </div>
    </section>
  )
}

export default Advantages
