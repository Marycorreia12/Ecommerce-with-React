import React from 'react'
import styles from './Textarea.module.css'

const Textarea = ({type, id, placeholder, value, onChange, error}) => {
 
  return (
    <div className={styles.wrapper}>
       <textarea type={type} name={id} id={id} placeholder={placeholder} value={value} onChange={onChange} rows='10' className={styles.textarea}/>
       <p className={styles.error}>{error}</p>
    </div>
  )
}

export default Textarea
