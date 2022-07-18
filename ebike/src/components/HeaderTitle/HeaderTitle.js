import React from 'react'
import styles from './HeaderTitle.module.css'

const HeaderTitle = ({texto}) => {
  return (
    <div className={styles.background}>
        <h1 className={styles.title}>{texto}</h1>
    </div>
  )
}

export default HeaderTitle
