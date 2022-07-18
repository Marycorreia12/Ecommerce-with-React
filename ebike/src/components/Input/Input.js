import React from 'react'
import styles from './Input.module.css'

const Input = ({placeholder, type, label, name, value, onChange, error, onBlur}) => {

  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.lable}>{label}</label>
      <input type={type} name={name} id={name} placeholder={placeholder} value={value} onChange={onChange} onBlur={onBlur} className={styles.input} />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}

export default Input
